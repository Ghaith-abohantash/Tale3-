const mongoose = require('mongoose');

const evaluationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: String, required: true },
  rating: { type: String, required: true },
  comments: { type: String, required: false },
});

const Evaluation = mongoose.model('Evaluation', evaluationSchema);
module.exports = Evaluation;