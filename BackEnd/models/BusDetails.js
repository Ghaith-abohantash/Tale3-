const mongoose = require("mongoose");

const BusDetailsSchema = new mongoose.Schema({
    origin: {type: String, required: true},
    destination: {type: String, required: true},
    price: {type: Number, required: true},
    busID: {type: String, required: true},
    passengerCount: {type: String, required: true},
    arrivalTime: {type: String, required: true},
    passengerCount: {type: Number, required: true},
    departureTime: {type: String, required: true},
});

const BusDetails = mongoose.model("BusDetails", BusDetailsSchema);

module.exports = BusDetails;
