const mongoose = require('mongoose'),
    {Schema} = mongoose;

let commentSchema = new Schema({
    text: String,
    author: {
        id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Comment', commentSchema);