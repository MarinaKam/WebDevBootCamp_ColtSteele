const mongoose = require('mongoose'),
    {Schema} = mongoose;

const todoSchema = new Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Todo', todoSchema);