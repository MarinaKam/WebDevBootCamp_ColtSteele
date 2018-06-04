const express             = require('express'),
    mongoose              = require('mongoose'),
    passport              = require('passport'),
    flash                 = require('connect-flash'),
    LocalStrategy         = require('passport-local'),
    methodOverride        = require('method-override'),
    cookieParser          = require('cookie-parser'),
    cookieSession         = require('cookie-session'),
    session               = require('express-session'),
    User                  = require('./models/user'),
    app                   = express(),
    router                = express.Router(),
    path                  = require('path');

let port = process.env.PORT || 3000;

const authRoutes          = require('./routes/index');
const url = process.env.DATABASEURL || 'mongodb://localhost/auth-app';

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(url, { autoIndex: false });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(cookieSession({
    keys: ['secret1', 'secret2']
}));
app.use(require('express-session')({
    secret: 'Marie Admin',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

// Passport:
app.use(passport.initialize());
app.use(passport.session());

//for taking the data from the session that's encoded
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
});

app.use(authRoutes);

app.listen(port, () => console.log(`The Example App has started on port ${port}!`));
