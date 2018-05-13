const mongoose            = require('mongoose'),
    {Schema}              = mongoose,
    passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    username: String,
    password: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);