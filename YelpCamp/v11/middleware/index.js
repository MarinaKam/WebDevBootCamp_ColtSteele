const express   = require('express'),
    router      = express.Router({mergeParams: true}),
    Campground  = require('../models/campground'),
    Comment     = require('../models/comment');

const middlewareObj = {
    isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) return next();
        req.flash('error', 'You need to be logged in to do that!');
        res.redirect('/login');
    },
    checkOwnerArticle(req, res, next) {
        if (req.isAuthenticated()) {
            Campground.findById(req.params.id, (err, foundCamp) => {
                if (err) {
                    req.flash('error', 'Campground not found!');
                    res.redirect('back');
                } else {
                    if (foundCamp.author.id.equals(req.user._id)) {
                        next();
                    } else {
                        req.flash('error', "You don't have permission to do that!");
                        res.redirect('back');
                    }
                }
            });
        } else {
            req.flash('error', 'You need to be logged in to do that!');
            res.redirect('back');
        }
    },
    checkOwnerComment(req, res, next) {
        if (req.isAuthenticated()) {
            Comment.findById(req.params.comment_id, (err, foundComment) => {
                if (err) {
                    req.flash('error', 'Comment not found!');
                    res.redirect('back')
                } else {
                    if (foundComment.author.id.equals(req.user._id)) {
                        next();
                    } else {
                        req.flash('error', "You don't have permission to do that!");
                        res.redirect('back');
                    }
                }
            });
        } else {
            req.flash('error', 'You need to be logged in to do that!');
            res.redirect('back');
        }
    }
};

module.exports = middlewareObj;
