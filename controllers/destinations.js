var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    create
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        flight.destinations.push(req.body);
        flight.save(function(err) { //make sure to send your errors to the browser 'in development' NOT IN PRODUCTION
            if(err) res.send(err) // always do something with your errors
            res.redirect(`/flights/${flight._id}`);
        });
    });
}