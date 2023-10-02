var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});

router.get('/services', function(req, res) {
  res.render('services');
});

router.get('/projects', function(req, res) {
  res.render('projects');
});

module.exports = router;

