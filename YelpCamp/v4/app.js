const express   = require('express'),
    bodyParser  = require('body-parser'),
    app         = express(),
    path        = require('path'),
    mongoose    = require('mongoose'),
    Campground  = require('./models/campground'),
    Comment     = require('./models/comment'),
    seedDB      = require('./seeds');

let port = 3000;

seedDB();
mongoose.set('debug', true);
mongoose.connect("mongodb://localhost/YelpCamp_app");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('landing');
});


//INDEX - show all campgrounds
app.get('/campgrounds', (req, res) => {
    //get all campgrounds from DB
    Campground.find({}, (err, allCamp) => {
        err ? console.log(err) : res.render('campgrounds/index', {campgrounds: allCamp});
    });

});


//CREATE - create new camp
app.post('/campgrounds', (req, res) => {
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let newCamp = {name: name, image: image, description: desc};
    //create a new campground and save to DB
    Campground.create(newCamp, (err, newlyCreated) => {
        err ? console.log(err) : res.redirect('/campgrounds');
    });
});

app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');
});


//SHOW - shows more info about one campground
app.get('/campgrounds/:id', (req, res) => {
    //find the campground with provided ID
    Campground.findById(req.params.id).populate('comments').exec((err, foundCamp) => {
        //render show template with that campground
        if(err) {
            console.log(err);
        } else {
            // console.log(foundCamp);
            res.render('campgrounds/show', {campground: foundCamp});
        }
    });
});


//=========================
// COMMENTS ROUTES
//=========================

app.get('/campgrounds/:id/comments/new', (req, res) => {
    //find campground by id
    Campground.findById(req.params.id, (err, foundCamp) => {
        err ? console.log(err) : res.render('comments/new', {campground: foundCamp});
    });

});

//=========================
// COMMENTS POST ROUTES
//=========================

app.post('/campgrounds/:id/comments', (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if (err) {
            console.log(err);
            res.redirect('/campgrounds');
        } else {
            console.log(req.body.comment);
            //create a new comment
            Comment.create(req.body.comment, (err, comment) => {
                if (err) {
                    console.log(err);
                } else {
                    //connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();
                    //redirect campground show page
                    res.redirect(`/campgrounds/${campground._id}`);
                }
            });
        }
    });


});

app.get('*', (req, res) => {
    res.send('Sorry page not found... YOU ARE THE STAR!!!');
});

app.listen(port, () => {
    console.log(`The YelpCamp App has started on port ${port}!`);
});
