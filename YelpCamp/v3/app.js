const express   = require('express'),
    bodyParser  = require('body-parser'),
    app         = express(),
    path        = require('path'),
    mongoose    = require('mongoose'),
    Campground  = require('./models/campground'),
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
        err ? console.log(err) : res.render('index', {campgrounds: allCamp});
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
    res.render('new');
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
            res.render('show', {campground: foundCamp});
        }
    });
});

app.get('*', (req, res) => {
    res.send('Sorry page not found... YOU ARE THE STAR!!!');
});

app.listen(port, () => {
    console.log(`The YelpCamp App has started on port ${port}!`);
});
