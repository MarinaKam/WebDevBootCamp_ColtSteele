let express = require('express');
let app = express();
let path = require('path');


let port = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
    // res.send('hello my little world!')
});

app.get('/fallinlovewith/:thing', (req, res) => {
   let thing = req.params.thing;
   // res.send(`<h2>You fell in love with ${thing}!</h2>`);
    res.render('love', {thingVar: thing});
});

app.get('/post', (req, res) => {
    let posts = [
        {title: 'Post 1', author: 'Susy'},
        {title: 'My adorable pet bunny', author: 'Marie'},
        {title: 'Can you believe this pomsky?', author: 'Peter'},
        {title: 'Post 4', author: 'Ivan'},
        {title: 'Marta as a teacher', author: 'Marta'}
    ];

    res.render('posts', { post: posts});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});