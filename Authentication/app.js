const express             = require('express'),
    mongoose              = require('mongoose'),
    passport              = require('passport'),
    User                  = require('./models/user'),
    LocalStrategy         = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    app                   = express(),
    port                  = 3000,
    path                  = require('path');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/auth_app');

//APP CONFIG (view engine setup)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/views')));
app.use(express.json());
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


//======================
//ROUTS
//======================
app.get('/', (req, res) => res.render('index'));

app.get('/secret', isLoggedIn, (req, res) => res.render('secret'));


//======================
// Auth Routes
//======================

//show sign up form
app.get('/register', (req, res) => res.render('register'));

app.post('/register', (req, res) => {
   User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.render('register');
        }
        // passport.authenticate('facebook')(req, res, () => {});
        // passport.authenticate('twitter')(req, res, () => {});
        passport.authenticate('local')(req, res, () => {
            res.redirect('/secret');
        });
   });

});

//handling user sign up



// LOGIN ROUTES
//render login form
app.get('/login', (req, res) => res.render('login'));
//login logic
//middleware
app.post('/login', passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login'
}),(req, res) => {});

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
}

app.get('*', (req, res) => res.send('Sorry page not found... YOU ARE THE STAR!!!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
