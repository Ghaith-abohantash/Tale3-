const mongoose = require("mongoose");

const BusDetailsSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const BusDetails = mongoose.model("BusDetails", BusDetailsSchema);

module.exports = BusDetails;
