var express = require('express');
const ice_controlers= require('../controllers/ice');
var router = express.Router();
/* GET ices */
router.get('/', ice_controlers.ice_view_all_Page );

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ice', { title: 'Search Results for ice' });
});

module.exports = router;
