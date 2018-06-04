const express   = require('express'),
    User        = require('../models/user'),
    passport    = require('passport');

let userController = {};

// Restrict access to root page
userController.home = (req, res) => res.render('index');

// Go to registration page
userController.register = (req, res) => res.render('register');

// Post registration
userController.doRegister = (req, res) => {
    let newUser = new User({ username : req.body.username});
    // eval(require('locus'));
    if(req.body.adminCode === 'secret1234') newUser.isAdmin = true;
    User.register(newUser, req.body.password, (err, user) => {
        if(err) {
            console.log(err);
            req.flash('error', `${err.message}!!!`);
            return res.redirect('register');
        }
        passport.authenticate('local')(req, res, () => {
            req.flash('success', `Successfully Signed Up! Welcome to Our App ${user.username}`);
            res.redirect('/secret');
        });
    })
};
// Go to login page
userController.login = (req, res) => res.render('login');

// Post login
userController.doLogin = (req, res) => {
    passport.authenticate('local', {
        successRedirect: '/secret',
        failureRedirect: '/login',
        failureFlash: true,
        successFlash: 'Welcome to Providence!'
    })(req, res, () => {});
};

//logout
userController.logout = (req, res) => {
    req.logout();
    req.flash('success', 'Logged you out!');
    res.redirect('/');
};


module.exports = userController;