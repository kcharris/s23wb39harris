var Ice = require('../models/ice');
// List of all ices
exports.ice_list = async function(req, res) {
    try{
        theIces = await Ice.find();
        res.send(theIces);
        }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
        
// for a specific ice.
exports.ice_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Ice detail: ' + req.params.id);
};
// Handle Ice create on POST.
exports.ice_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: ice create POST');
};
// Handle ice delete form on DELETE.
exports.ice_delete = function(req, res) {
res.send('NOT IMPLEMENTED: ice delete DELETE ' + req.params.id);
};
// Handle ice update form on PUT.
exports.ice_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: ice update PUT' + req.params.id);
};