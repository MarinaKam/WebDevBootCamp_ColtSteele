require('dotenv').config();
const express             = require('express'),
    mongoose              = require('mongoose'),
    passport              = require('passport'),
    flash                 = require('connect-flash'),
    LocalStrategy         = require('passport-local'),
    methodOverride        = require('method-override'),
    User                  = require('./models/user'),
    Campground            = require('./models/campground'),
    Comment               = require('./models/comment'),
    seedDB                = require('./seeds'),
    path                  = require('path'),
    app                   = express();

//requiring routes
const campgroundRoutes    = require('./routes/campgrounds'),
    commentRoutes         = require('./routes/comments'),
    authRoutes            = require('./routes/index');

let port = 3000;

//seedDB();//seed the DB
mongoose.set('debug', true);
mongoose.connect("mongodb://localhost/YelpCamp_app");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(flash());


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

app.locals.moment = require('moment');

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
});

app.use(authRoutes);
app.use('/campgrounds/:id/comments', commentRoutes);
app.use('/campgrounds', campgroundRoutes);

app.get('*', (req, res) => res.send('Sorry page not found... YOU ARE THE STAR!!!'));

app.listen(port, () => console.log(`The YelpCamp App has started on port ${port}!`));
