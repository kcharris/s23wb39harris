var express = require('express');
const ice_controlers= require('../controllers/ice');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
  if (req.user){
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
/* GET ices */
router.get('/', ice_controlers.ice_view_all_Page );

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ice', { title: 'Search Results for ice' });
});
/* GET detail ice page */
router.get('/detail', ice_controlers.ice_view_one_Page);
/* GET create ice page */
router.get('/create', ice_controlers.ice_create_Page);
/* GET create update page */
router.get('/update',secured, ice_controlers.ice_update_Page);
/* GET delete ice page */
router.get('/delete', ice_controlers.ice_delete_Page);



module.exports = router;
