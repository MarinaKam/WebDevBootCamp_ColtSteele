const express           = require('express'),
    app                 = express(),
    router              = express.Router(),
    path                = require('path');

let port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => res.render('index'));

app.listen(port, () => console.log(`The Example App has started on port ${port}!`));
