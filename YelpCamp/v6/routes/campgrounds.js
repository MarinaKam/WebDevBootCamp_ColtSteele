const express   = require('express'),
    router      = express.Router(),
    Campground  = require('../models/campground');

//INDEX - show all campgrounds
router.get('/', (req, res) => {
    console.log(req.user);
    Campground.find({}, (err, allCamp) => err ? console.log(err) : res.render('campgrounds/index', {campgrounds: allCamp}));
});

//CREATE - create new camp
router.post('/', (req, res) => {
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let newCamp = {name: name, image: image, description: desc};
    //create a new campground and save to DB
    Campground.create(newCamp, (err, newlyCreated) => err ? console.log(err) : res.redirect('/campgrounds'));
});

router.get('/new', (req, res) => res.render('campgrounds/new'));


//SHOW - shows more info about one campground
router.get('/:id', (req, res) => {
    Campground.findById(req.params.id).populate('comments').exec((err, foundCamp) => {
        err ? console.log(err) : res.render('campgrounds/show', {campground: foundCamp});
    });
});

module.exports = router;
