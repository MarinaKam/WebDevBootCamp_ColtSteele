const express   = require('express'),
    router      = express.Router(),
    Campground  = require('../models/campground'),
    User        = require('../models/user'),
    passport    = require('passport'),
    middleware  = require('../middleware');

router.get('/', (req, res) => res.render('landing'));

//show register form
router.get('/register', (req, res) => res.render('register'));
router.post('/register', (req, res) => {
    let newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, (err, user) => {
        if(err) {
            req.flash('error', `${err.message}!!!`);
            return res.redirect('register');
        }
        passport.authenticate('local')(req, res, () => {
            req.flash('success', `Successfully Signed Up! Welcome to YelpCamp ${user.username}`);
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
        failureRedirect: '/login',
        failureFlash: true
    }), (req, res) => {});

//logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Logged you out!');
    res.redirect('/campgrounds');
});

module.exports = router;