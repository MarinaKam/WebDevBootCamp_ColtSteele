const express             = require('express'),
    mongoose              = require('mongoose'),
    passport              = require('passport'),
    LocalStrategy         = require('passport-local'),
    User                  = require('./models/user'),
    Campground            = require('./models/campground'),
    Comment               = require('./models/comment'),
    seedDB                = require('./seeds'),
    path                  = require('path'),
    app                   = express();

let port = 3000;

seedDB();
mongoose.set('debug', true);
mongoose.connect("mongodb://localhost/YelpCamp_app");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));

//SETTING PASSPORT APP
app.use(require('express-session')({
    secret: 'Marie Admin',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

//for taking the data from the session that's encoded
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

app.get('/', (req, res) => res.render('landing'));


//INDEX - show all campgrounds
app.get('/campgrounds', (req, res) => {
    console.log(req.user);
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

app.get('/campgrounds/new', (req, res) => res.render('campgrounds/new'));


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

app.get('/campgrounds/:id/comments/new', isLoggedIn, (req, res) => {
    //find campground by id
    Campground.findById(req.params.id, (err, foundCamp) => {
        err ? console.log(err) : res.render('comments/new', {campground: foundCamp});
    });

});

//=========================
// COMMENTS POST ROUTES
//=========================

app.post('/campgrounds/:id/comments', isLoggedIn, (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if (err) {
            console.log(err);
            res.redirect('/campgrounds');
        } else {
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

//=========================
// AUTH ROUTES
//=========================

//show register form
app.get('/register', (req, res) => res.render('register'));
app.post('/register', (req, res) => {
    let newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, (err, user) => {
        if(err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, () => {
            res.redirect('/campgrounds');
        });
    });
});

//show login form
app.get('/login', (req, res) => res.render('login'));

//handling login logic
app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/campgrounds',
        failureRedirect: '/login'
    }), (req, res) => {});

//logout
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/campgrounds');
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
}

app.get('*', (req, res) => {
    res.send('Sorry page not found... YOU ARE THE STAR!!!');
});

app.listen(port, () => {
    console.log(`The YelpCamp App has started on port ${port}!`);
});
