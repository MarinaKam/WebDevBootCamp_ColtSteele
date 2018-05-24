const express      = require('express'),
    app          = express(),
    port         = process.env.PORT || 3000,
    path         = require('path');

//APP CONFIG (view engine setup)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/views')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const itemRoutes  = require('./routes/items');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/blogs', (req, res) => {
    res.render('blogs');
});

app.get('/blogs/new', (req, res) => {
    res.render('new');
});

app.use('/api/items', itemRoutes);

app.get('*', (req, res) => res.send('Sorry page not found... YOU ARE THE STAR!!!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

