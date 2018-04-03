let express = require('express');
let app = express();

let port = 3000;

app.get('/', (req, res) => {
    res.send('Hi there, welcome to my assignment!');
});

app.get('/bye',  (req, res) => {
    res.send('Good Bye!!!');
});

app.get('/dog',  (req, res) => {
    res.send('Meow!!!');
});

//rout parameters or path variables:
//app.get('/r/subredditName/comments/id/title');

// app.get('/r/:name', (req, res) => {
//     console.log(req.params);
//     console.log(req.params.name);
//     let name = req.params.name;
//     // res.send('Welcome to a Subreddit!');
//     res.send(`Welcome to THE ${name.toUpperCase()} SUBREDDIT!`);
// });

// app.get('/r/:name/comments/:id/:title', (req, res) => {
//     console.log(req.params);
//     console.log(req.params.title);
//     res.send('Welcome to The Comments Page!!!');
// });

// app.get('/speak/:title', (req, res) => {
//     let title = req.params.title;
//     console.log(title);
//
//     (title === 'pig') ? res.send('The pig says "Oink"') :
//         (title === 'cow') ? res.send('The pig says "Moo"') :
//             (title === 'dog') ? res.send('The pig says "Woof Woof!"') : res.send('Sorry page not found... YOU ARE THE STAR!!!');
// });

app.get('/speak/:title', (req, res) => {
    let animal = req.params.title.toLowerCase();
    let sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof woof!",
        cat: "I hate you dogs!!!",
        fish: "..."
    };
    let sound = sounds[animal];
    res.send(`The ${animal} says "${sound}"`);
});

app.get('/repeat/:name/:id', (req, res) => {
    let name = req.params.name + " ";
    let id = +req.params.id;

    res.send(name.repeat(id));
});

app.get('*', (req, res) => {
    res.send('Sorry page not found... YOU ARE THE STAR!!!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});