const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/menu-img_app');
mongoose.Promise = Promise;


module.exports.Item = require('./item');