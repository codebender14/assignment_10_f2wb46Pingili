var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('function', { title: 'Search Results for Function Class' });
});

module.exports = router;