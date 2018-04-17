const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo');

//POST - title, content
const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

let Post = mongoose.model('Post', postSchema);

//USER - email, name
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

let User = mongoose.model('User', userSchema);

// let newUser = new User({
//     email: 'hermione@hogwards.edu',
//     name: 'Hermione Granger'
// });
//
// newUser.posts.push({
//     title: 'Magna Etiam Sit',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor ' +
//     'mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. ' +
//     'Maecenas faucibus mollis interdum. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris ' +
//     'condimentum nibh, ut fermentum massa justo sit amet risus.'
// });
//
// newUser.save((err, user) => {
//     err ? console.log(err) : console.log(user);
// });


// let newPost = new Post({
//     title: 'Reflections on Apples',
//     content: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit ' +
//     'amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper.'
// });
//
// newPost.save((err, post) => {
//     err ? console.log(err) : console.log(post);
// });

User.findOne({name: 'Hermione Granger'}, (err, user) => {
    if (err) {
        // console.log(err);
    } else {
        user.posts.push({
            title: 'Risus Ullamcorper',
            content: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. ' +
            'Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet ' +
            'rutrum faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
        });
        user.save((err, user) => {
            err ? console.log(err) : console.log(user);
        });
    }
});