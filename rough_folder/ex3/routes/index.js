const express   = require('express'),
    router      = express.Router(),
    User        = require('../models/user'),
    auth        = require('../controllers/AuthController'),
    middleware  = require('../middleware');

// restrict index for logged in user only
router.get('/', auth.home);

// route to register page
router.get('/register', auth.register);

// route for register action
router.post('/register', auth.doRegister);

// route to login page
router.get('/login', auth.login);

// route for login action
router.post('/login', auth.doLogin, (req, res) => {});

// route for logout action
router.get('/logout', auth.logout);

router.get('/secret', middleware.isLoggedIn, (req, res) => res.render('secret'));

module.exports = router;