const mongoose = require('mongoose'),
    {Schema} = mongoose;

//SCHEMA SetUp
let campgroundSchema = new Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    image: {
        type: String,
        required: 'Image cannot be blank!'
    },
    description: String,
    author: {
        id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

module.exports = mongoose.model('Campground', campgroundSchema);