const express   = require('express'),
    router      = express.Router({mergeParams: true}),
    Campground  = require('../models/campground'),
    Comment     = require('../models/comment'),
    middleware  = require('../middleware');
//Comments New
router.get('/new', middleware.isLoggedIn, (req, res) => {
    Campground.findById(req.params.id, (err, foundCamp) => err ? console.log(err) : res.render('comments/new', {campground: foundCamp}));
});

//Comments Create
router.post('/', middleware.isLoggedIn, (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if (err) {
            console.log(err);
            res.redirect('/campgrounds');
        } else {
            Comment.create(req.body.comment, (err, comment) => {
                if (err) {
                    req.flash('error', 'Something went wrong :(');
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
                    req.flash('success', 'Successfully added comment :)');
                    res.redirect(`/campgrounds/${campground._id}`);
                }
            });
        }
    });

});

//EDIT COMMENT ROUTE
router.get('/:comment_id/edit', middleware.checkOwnerComment, (req, res) => {
    Comment.findById(req.params.comment_id, (err, foundComment) => {
        err ? res.redirect('back') : res.render('comments/edit', {campground_id: req.params.id, comment: foundComment});
    });
});

//UPDATE COMMENT ROUTE
router.put('/:comment_id', middleware.checkOwnerComment, (req, res) => {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment,  (err, updatedComment) => {
        err ? res.redirect('back') : res.redirect(`/campgrounds/${req.params.id}`);
    });
});

//DESTROY COMMENT ROUTE
router.delete('/:comment_id', middleware.checkOwnerComment, (req, res) => {
    Comment.findByIdAndRemove(req.params.comment_id,  (err, foundComment) => {
        if (err) {
            res.redirect('back');
        } else {
            req.flash('success', 'Comment Deleted!');
            res.redirect(`/campgrounds/${req.params.id}`);
        }
        // err ? res.redirect('back') : res.redirect(`/campgrounds/${req.params.id}`);
    });
});

module.exports = router;