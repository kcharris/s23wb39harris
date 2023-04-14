var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var ice_controller = require('../controllers/ice');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// ice ROUTES ///
// POST request for creating a ice.
router.post('/ices', () => {ice_controller.ice_create_post});
// DELETE request to delete ice.
router.delete('/ices/:id', ice_controller.ice_delete);
// PUT request to update ice.
router.put('/ices/:id', ice_controller.ice_update_put);
// GET request for one ice.
router.get('/ices/:id', ice_controller.ice_detail);
// GET request for list of all ice items.
router.get('/ices', ice_controller.ice_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"ices", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
