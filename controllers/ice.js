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
exports.ice_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Ice.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
// Handle Ice delete on DELETE.
exports.ice_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await Ice.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};



// Handle ice update form on PUT.
// Handle ice update form on PUT.
exports.ice_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Ice.findById( req.params.id)
        // Do updates of properties
        if(req.body.ice_type) toUpdate.ice_type = req.body.ice_type;
        if(req.body.cost) toUpdate.cost = req.body.cost;
        if(req.body.shape) toUpdate.shape = req.body.shape;
        if(req.body.weight) toUpdate.weight = req.body.weight;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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
// Handle a show one view with id specified by query
exports.ice_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Ice.findById( req.query.id)
    res.render('icedetail',
    { title: 'Ice Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for creating a ice.
// No body, no in path parameter, no query.
// Does not need to be async
exports.ice_create_Page = function(req, res) {
console.log("create view")
try{
res.render('icecreate', { title: 'ice Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle building the view for updating a ice.
// query provides the id
exports.ice_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Ice.findById(req.query.id)
    res.render('iceupdate', { title: 'ice Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle a delete one view with id from query
exports.ice_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Ice.findById(req.query.id)
    res.render('icedelete', { title: 'ice Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

