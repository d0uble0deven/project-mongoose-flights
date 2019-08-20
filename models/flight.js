var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL, LAX', 'SEA']
    }, 
    arrival: {
        type: Date
    } 
});

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['United', 'American', 'Southwest']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL, LAX', 'SEA'],
        default: 'SEA'
    },
    destination: [destinationSchema],
    tickets: {
        type: Schema.Types.ObjectId,
        ref: 'Ticket'
    }
}); 

module.exports = mongoose.model('Flight', flightSchema);