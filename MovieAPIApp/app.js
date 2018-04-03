let express = require('express');
let app = express();
let request = require('request');
let path = require('path');
let port = 3000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
    res.render('search');
});

app.get('/results', function (req, res) {
    let key = req.query.search;
    let url = `http://www.omdbapi.com/?apikey=thewdb&s=${key}`;
    request(url, (error, response, body) => {
       if(!error && response.statusCode === 200) {
           let data = JSON.parse(body);
           res.render('results', {data: data});
       }
    });
});

app.get('*', (req, res) => {
    res.send('Sorry page not found... YOU ARE THE STAR!!!');
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
