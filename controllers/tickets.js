var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    add
};

function add(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        flight.destination.push(req.body.ticketId);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
    });
});
}

function newTicket(req, res) {
    Ticket.find({}, function(err, tickets) {
        res.render('tickets/new', {
            title: 'Ticket title on Controllers',
            tickets
        });
    });
}


function create(req, res) {
    var s = req.body.date;
    req.body.date = `${s.substr(5,2)}-${s.substr(8,2)}-${0,4}}`;
    Ticket.create(req.body, function(err, ticket){
        res.redirect('/tickets/new');
    });
}
