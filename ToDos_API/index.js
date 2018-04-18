const bodyParser = require('body-parser'),
    express      = require('express'),
    app          = express(),
    port         = 3000,
    path         = require('path');

//APP CONFIG (view engine setup)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/views')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const todoRoutes  = require('./routes/todos');

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

app.get('*', (req, res) => {
    res.send('Sorry page not found... YOU ARE THE STAR!!!');
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
