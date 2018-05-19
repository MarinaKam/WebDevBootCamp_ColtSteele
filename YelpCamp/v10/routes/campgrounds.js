const express   = require('express'),
    router      = express.Router(),
    Campground  = require('../models/campground'),
    middleware  = require('../middleware');

//INDEX - show all campgrounds
router.get('/', (req, res) => {
    console.log(req.user);
    Campground.find({}, (err, allCamp) => err ? console.log(err) : res.render('campgrounds/index', {campgrounds: allCamp}));
});

//CREATE - create new camp
router.post('/', middleware.isLoggedIn, (req, res) => {
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let author = {
        id:         req.user._id,
        username:   req.user.username
    };
    let newCamp = {name: name, image: image, description: desc, author: author};
    //create a new campground and save to DB
    Campground.create(newCamp, (err, newlyCreated) => err ? console.log(err) : res.redirect('/campgrounds'));
});

router.get('/new', middleware.isLoggedIn, (req, res) => res.render('campgrounds/new'));


//SHOW - shows more info about one campground
router.get('/:id', (req, res) => {
    Campground.findById(req.params.id).populate('comments').exec((err, foundCamp) => {
        err ? console.log(err) : res.render('campgrounds/show', {campground: foundCamp});
    });
});

//EDIT CAMPGROUND ROUTE
router.get('/:id/edit', middleware.checkOwnerArticle, (req, res) => {
        Campground.findById(req.params.id, (err, foundCamp) => err ? res.redirect('/campgrounds') : res.render('campgrounds/edit', {campground: foundCamp}));
});


//UPDATE CAMPGROUND ROUTE
router.put('/:id', middleware.checkOwnerArticle, (req, res) => {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, updatedCamp) => {
        err ? res.redirect('/campgrounds') : res.redirect(`/campgrounds/${req.params.id}`);
    });
});

//DESTROY CAMPGROUND ROUTE
router.delete('/:id', middleware.checkOwnerArticle, (req, res) => {
    Campground.findByIdAndRemove(req.params.id, (err, foundCamp) => {
        err ? res.redirect('/campgrounds') : res.redirect('/campgrounds');
    });
});

module.exports = router;
