const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  paymentMethod: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  numberOfPeople: {
    type: Number,
    required: true,
  },
  cardDetails: {
    number: { 
      type: String 
    },
    expiry: { 
      type: String 
    },
    cvc: { 
      type: String 
    },
  },
  busDestination: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Book = mongoose.model("Booking", BookingSchema);

module.exports = Book;
