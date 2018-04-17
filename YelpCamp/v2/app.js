const express   = require('express'),
    bodyParser  = require('body-parser'),
    app         = express(),
    path        = require('path'),
    mongoose    = require('mongoose');

    mongoose.connect("mongodb://localhost/YelpCamp_app");

let port = 3000;

//SCHEMA SetUp
let campgroundSchema = mongoose.Schema({
    name: String,
    image: String,
    description: String
});

let Campground = mongoose.model('Campground', campgroundSchema);

// Campground.create({
//     name: 'Granite Hill',
//     image: 'https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg',
//     description:'This is a huge granite hill, no bathrooms, no water. Beautiful granite!'
// }, (err, campground) => {
//     err ? console.log(err) : console.log(campground)
// });

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
    Campground.findById(req.params.id, (err, foundCamp) => {
        //render show template with that campground
        err ? console.log(err) : res.render('show', {campground: foundCamp});
    });
});

app.get('*', (req, res) => {
    res.send('Sorry page not found... YOU ARE THE STAR!!!');
});

app.listen(port, () => {
    console.log(`The YelpCamp App has started on port ${port}!`);
});
