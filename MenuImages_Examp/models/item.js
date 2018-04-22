const mongoose = require('mongoose'),
    {Schema} = mongoose;

const itemSchema = new Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    image: {
        type: String,
        required: 'Image cannot be blank!'
    },
    category: {
        type: String,
        required: 'Category cannot be blank!'
    },
    body: String,
    completed: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Item', itemSchema);