const express   = require('express'),
    router      = express.Router(),
    Campground  = require('../models/campground'),
    User        = require('../models/user'),
    passport    = require('passport');

router.get('/', (req, res) => res.render('landing'));

//show register form
router.get('/register', (req, res) => res.render('register'));
router.post('/register', (req, res) => {
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
router.get('/login', (req, res) => res.render('login'));

//handling login logic
router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/campgrounds',
        failureRedirect: '/login'
    }), (req, res) => {});

//logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/campgrounds');
});

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) return next();
        res.redirect('/login');
    }

module.exports = router;