let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let path = require('path');
let port = 3000;


let campgrounds = [
    {name: "salmon creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"}
];

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/campgrounds', (req, res) => {
    res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', (req, res) => {
    let name = req.body.name;
    let image = req.body.image;
    let newCamp = {name: name, image: image};
    campgrounds.push(newCamp);
    res.redirect('/campgrounds');
});

app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});


app.get('*', (req, res) => {
    res.send('Sorry page not found... YOU ARE THE STAR!!!');
});

app.listen(port, () => {
    console.log(`The YelpCamp App has started on port ${port}!`);
});
