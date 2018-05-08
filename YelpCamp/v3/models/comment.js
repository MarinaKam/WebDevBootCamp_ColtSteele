const mongoose = require('mongoose'),
    {Schema} = mongoose;

let commentSchema = new Schema({
    text: String,
    author: String
});

module.exports = mongoose.model('Comment', commentSchema);