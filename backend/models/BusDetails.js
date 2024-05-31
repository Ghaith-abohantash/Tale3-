import mongoose from "mongoose";

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

export default BusDetails;
