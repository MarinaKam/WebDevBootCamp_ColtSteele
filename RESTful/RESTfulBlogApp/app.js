const bodyParser        = require('body-parser'),
    methodOverride      = require('method-override'),
    expressSanitizer    = require('express-sanitizer'),
    mongoose            = require('mongoose'),
    express             = require('express'),
    app                 = express(),
    path                = require('path'),
    port                = 3000;

// APP CONFIG (view engine setup)
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride('_method'));

//MONGOOSE/Model Config (SCHEMA SetUp)
let blogSchema = mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
let Blog = mongoose.model('Blog', blogSchema);

//RESTful ROUTES

// Blog.create({
//     title: 'Test Blog',
//     image: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4800ae89e3ae4ae91bf6aa92c815d98e&auto=format&fit=crop&w=900&q=60',
//     body: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor ' +
//     'fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
// }, (err, blog) => {
//     err ? console.log(err) : console.log(blog);
// });

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

//INDEX ROUTE

app.get('/blogs', (req, res) => {
    Blog.find({}, (err, blogs) => {
        err ? console.log(err) : res.render('index', {blogs: blogs});
    });
});

//NEW ROUTE

app.get('/blogs/new', (req, res) => {
    res.render('new');
});

//CREATE ROUTE
app.post('/blogs', (req, res) => {
    // console.log(req.body);
    // req.body.blog.body = req.sanitize(req.body.blog.body);
    // console.log("==================");
    console.log(req.body);
    //create a new campground and save to DB
    Blog.create(req.body.blog, (err, newlyBlog) => {
        err ? res.render('new') : res.redirect('/blogs');
    });
});

//SHOW ROUTE
app.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        err ? res.redirect('/blogs') : res.render('show', {blogs: foundBlog});
    });
});

//EDIT ROUTE
app.get('/blogs/:id/edit', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        err ? res.redirect('/blogs') : res.render('edit', {blogs: foundBlog});
    });
});


//UPDATE ROUTE
app.put('/blogs/:id', (req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
        err ? res.redirect('/blogs') : res.redirect(`/blogs/${req.params.id}`);
    });
});

//DESTROY ROUTE
app.delete('/blogs/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err, foundBlog) => {
        err ? res.redirect('/blogs') : res.redirect('/blogs');
    });
});


app.get('*', (req, res) => {
    res.send('Sorry page not found... YOU ARE THE STAR!!!');
});

app.listen(port, () => {
    console.log(`The RESTful Blog App has started on port ${port}!`);
});
