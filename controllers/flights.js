var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show
};

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
  console.log({...req.body})
    let flight = new Flight(req.body);
    flight.save(function(err, flight) {
      // one way to handle errors
      if (err) return res.send(err);
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
  }

  function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index');
    });
  }
      

  function show(req, res) {
    Flight.findById(req.params.id, function(err, flights) {
      Ticket.find({flight: flights._id}, function(err, tickets) {
        res.render('flights/details');
      })
    })
  }



function show(req, res) {
  Flight.findById(req.params.id)
    .populate('ticket').exec( function(err, flight) {
        Ticket.find({
          _id: {$nin: flight}
        }, function(err, flights) {
          title: 'Film Detail',
          flight,
          Ticket
        });
    res.render('flights/show', { title: 'Flight Detail', flight });
  });
}