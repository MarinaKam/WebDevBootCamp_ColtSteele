var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Example App' });
});

// router.get('*', (req, res) => {
//     res.send('Sorry page not found... YOU ARE THE STAR!!!');
// });

module.exports = router;
