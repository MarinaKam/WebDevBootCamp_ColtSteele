const express   = require('express'),
    router      = express.Router({mergeParams: true}),
    Campground  = require('../models/campground'),
    Comment     = require('../models/comment');
//Comments New
router.get('/new', isLoggedIn, (req, res) => {
    Campground.findById(req.params.id, (err, foundCamp) => err ? console.log(err) : res.render('comments/new', {campground: foundCamp}));
});

//Comments Create
router.post('/', isLoggedIn, (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if (err) {
            console.log(err);
            res.redirect('/campgrounds');
        } else {
            Comment.create(req.body.comment, (err, comment) => {
                if (err) {
                    console.log(err);
                } else {
                    //add username and id comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    //save comment
                    comment.save();
                    campground.comments.push(comment);
                    campground.save();
                    console.log(comment);
                    res.redirect(`/campgrounds/${campground._id}`);
                }
            });
        }
    });

});

//EDIT COMMENT ROUTE
router.get('/:comment_id/edit', checkOwnerComment, (req, res) => {
    Comment.findById(req.params.comment_id, (err, foundComment) => {
        err ? res.redirect('back') : res.render('comments/edit', {campground_id: req.params.id, comment: foundComment});
    });
});

//UPDATE COMMENT ROUTE
router.put('/:comment_id', checkOwnerComment, (req, res) => {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment,  (err, updatedComment) => {
        err ? res.redirect('back') : res.redirect(`/campgrounds/${req.params.id}`);
    });
});

//DESTROY COMMENT ROUTE
router.delete('/:comment_id', checkOwnerComment, (req, res) => {
    Comment.findByIdAndRemove(req.params.comment_id,  (err, foundComment) => {
        err ? res.redirect('back') : res.redirect(`/campgrounds/${req.params.id}`);
    });
});

//middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
}


function checkOwnerComment(req, res, next) {
    if (req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, (err, foundComment) => {
            err ? res.redirect('back') : foundComment.author.id.equals(req.user._id) ? next() : res.redirect('back');
        });
    } else {
        res.redirect('back');
    }

}

module.exports = router;