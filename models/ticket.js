var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketSchema = new Schema({
    seat: {
        type: String, 
        match: /[A-F][1-9]\d?/
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    tickets: {
        type: Schema.Types.ObjectId,
        ref: 'Ticket'
    }

});

module.exports = mongoose.model(
    'Ticket',
    ticketSchema
);