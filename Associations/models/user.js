const mongoose = require('mongoose');
const {Schema} = mongoose;

//USER - email, name
const userSchema = new Schema({
    email: String,
    name: String,
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

module.exports = mongoose.model('User', userSchema);
