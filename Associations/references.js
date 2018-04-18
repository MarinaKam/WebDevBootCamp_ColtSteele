const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.connect('mongodb://localhost/blog_demo_2');


//POST - title, content
const Post = require('./models/post');

//USER - email, name
const User = require('./models/user');

// User.create({
//     email: 'bob@gmail.com',
//     name: 'Bob Belcher'
// });

// Post.create({
//     title: 'Vulputate Sollicitudin Pt. 4',
//     content: 'Cras mattis consectetur purus sit amet fermentum.'
// }, (err, post) => {
//     User.findOne({email: 'bob@gmail.com'}, (err, foundUser) => {
//         if (err) {
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save((err, data) => {
//                 err ? console.log(err) : console.log(data);
//             });
//         }
//     });
// });

//FIND USER
//Find all posts for that Users

User.findOne({email: 'bob@gmail.com'}).populate('posts').exec((err, user) => {
    err ? console.log(err) : console.log(user);
});

