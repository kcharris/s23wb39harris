var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ice', { title: 'Search Results for ice' });
});

module.exports = router;
