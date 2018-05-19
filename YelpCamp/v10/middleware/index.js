const express   = require('express'),
    router      = express.Router({mergeParams: true}),
    Campground  = require('../models/campground'),
    Comment     = require('../models/comment');

const middlewareObj = {
    isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) return next();
        res.redirect('/login');
    },
    checkOwnerArticle(req, res, next) {
        if (req.isAuthenticated()) {
            Campground.findById(req.params.id, (err, foundCamp) => {
                err ? res.redirect('back') : foundCamp.author.id.equals(req.user._id) ? next() : res.redirect('back');
            });
        } else {
            res.redirect('back');
        }
    },
    checkOwnerComment(req, res, next) {
        if (req.isAuthenticated()) {
            Comment.findById(req.params.comment_id, (err, foundComment) => {
                err ? res.redirect('back') : foundComment.author.id.equals(req.user._id) ? next() : res.redirect('back');
            });
        } else {
            res.redirect('back');
        }
    }
};

module.exports = middlewareObj;
