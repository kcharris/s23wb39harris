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
exports.Ice_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Ice();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Ice_type":"goat", "cost":12, "size":"large"}
    document.shape = req.body.shape;
    document.cost = req.body.cost;
    document.weight = req.body.weight;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// Handle ice delete form on DELETE.
exports.ice_delete = function(req, res) {
res.send('NOT IMPLEMENTED: ice delete DELETE ' + req.params.id);
};
// Handle ice update form on PUT.
exports.ice_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: ice update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.ice_view_all_Page = async function(req, res) {
    try{
    theIces = await Ice.find();
    res.render('ice', { title: 'Ice Search Results', results: theIces });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
