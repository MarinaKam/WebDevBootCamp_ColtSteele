const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cat_app");

const catSchema = mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

let Cat = mongoose.model('Cat', catSchema);

// Cat.find();
// Cat.remove();
// Cat.create();
//etc.

//add a new cat to the DB
// let george = new Cat({
//     name: "George",
//     age: 11,
//     temperament: "Grouchy"
// });

// let george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });
//
// george.save((err, cat) => {
//     err ? console.log(`Something went wrong`) : console.log(`We just saved a cat to the DB:`);
//     console.log(cat);
// });

// norris.save((err, cat) => {
//     err ? console.log(`Something went wrong`) : console.log(`We just saved a cat to the DB:`);
//     console.log(cat);
// });

Cat.create({
    name: 'Snow White',
    age: 15,
    temperament: 'Bland'
}, (err, cat) => {
    err ? console.log(err) : console.log(cat);
});
//retriever all cats from thу DB and console.log each one

Cat.find({}, (err, cats) => {
    if (err) {
        console.log('Oh no, Error!');
        console.log(err);
    } else {
        console.log('All The Cats......');
        console.log(cats);
    }
});

