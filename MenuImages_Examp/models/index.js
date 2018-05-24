const mongoose = require('mongoose');
const url = process.env.DATABASEURL || 'mongodb://localhost/menu-img_app';

mongoose.set('debug', true);
mongoose.connect(url);
// mongoose.connect('mongodb://app_author:menu@ds037587.mlab.com:37587/menu_img_app');
mongoose.Promise = Promise;


module.exports.Item = require('./item');