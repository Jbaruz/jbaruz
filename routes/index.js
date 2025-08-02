var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Juan Arevalo' });
});
router.get('/index1', function(req, res, next) {
  res.render('index1', { title: 'Test' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
router.get('/get', function(req, res, next) {
  res.render('get', { title: 'Get' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.get('/link', function(req, res, next) {
  res.render('link', { title: 'Link' });
});

router.get('/search', function(req, res, next) {
  let query = req.query.query;

  if(query) {
    if(query === "you.com" || query.includes("you.com")) {
      return res.redirect('http://www.you.com');
    } else {
      // Implement logic for other search queries or just send a message.
      res.send("Searched for: " + query);
    }
  } else {
    res.send("Please enter a search query.");
  }
});


module.exports = router;
