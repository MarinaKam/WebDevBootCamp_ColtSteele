let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');

let port = 3000;

let friends = ['Marie', 'Susy', 'Peter', 'Ivan', 'Marta'];

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/addfriend', (req, res) => {
    let newFriend = req.body.newFriend;
    friends.push(newFriend);
    // res.send('You Have Reached The Post Route!!!');
    res.redirect('/friends');
});

app.get('/friends', (req, res) => {
   res.render('friends', { friendName: friends });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});