const express = require('express');
const app = express();
const port = 3000;
let path = require('path');
// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
    // res.send('hello world!');
    res.render('home');
});


app.get('*', (req, res) => {
    res.send('Sorry page not found... YOU ARE THE STAR!!!');
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
