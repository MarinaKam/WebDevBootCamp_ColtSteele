const express   = require('express'),
    router      = express.Router(),
    Campground  = require('../models/campground'),
    middleware  = require('../middleware');

const NodeGeocoder = require('node-geocoder');

const options = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null
};

const geocoder = NodeGeocoder(options);

//INDEX - show all campgrounds
router.get('/', (req, res) => {
    console.log(req.user);
    Campground.find({}, (err, allCamp) => err ? console.log(err) : res.render('campgrounds/index', {campgrounds: allCamp}));
});

//CREATE - create new camp
router.post('/', middleware.isLoggedIn, (req, res) => {
    let name = req.body.name;
    let price = req.body.price;
    let image = req.body.image;
    let desc = req.body.description;
    let author = {
        id:         req.user._id,
        username:   req.user.username
    };
    geocoder.geocode(req.body.location, function (err, data) {
        if (err || !data.length) {
            req.flash('error', 'Invalid address');
            return res.redirect('back');
        }
        let lat = data[0].latitude;
        let lng = data[0].longitude;
        let location = data[0].formattedAddress;
        let newCamp = {name: name, price: price, image: image, description: desc, author:author, location: location, lat: lat, lng: lng};
        // Create a new campground and save to DB
        Campground.create(newCamp, (err, newlyCreated) => err ? console.log(err) : res.redirect('/campgrounds'));
    });
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
    geocoder.geocode(req.body.location, function (err, data) {
        if (err || !data.length) {
            req.flash('error', 'Invalid address');
            return res.redirect('back');
        }
        req.body.campground.lat = data[0].latitude;
        req.body.campground.lng = data[0].longitude;
        req.body.campground.location = data[0].formattedAddress;

        Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, campground){
            if(err){
                req.flash("error", err.message);
                res.redirect("back");
            } else {
                req.flash("success","Successfully Updated!");
                res.redirect(`/campgrounds/${req.params.id}`);
            }
        });
    });
});

//DESTROY CAMPGROUND ROUTE
router.delete('/:id', middleware.checkOwnerArticle, (req, res) => {
    Campground.findByIdAndRemove(req.params.id, (err, foundCamp) => {
        if(err) {
            res.redirect('/campgrounds');
        } else {
            req.flash('error', campground.name + ' deleted!');
            res.redirect('/campgrounds');
        }
    });
});

module.exports = router;
