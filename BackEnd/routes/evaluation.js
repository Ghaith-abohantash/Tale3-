const express = require('express');
const router = express.Router();
const Evaluation = require('../models/Evaluation');

router.post('/', async (req, res) => {
  const { name, email, service, rating, comments } = req.body;

  try {
    const newEvaluation = new Evaluation({ name, email, service, rating, comments });
    await newEvaluation.save();
    res.status(201).json(newEvaluation);
  } catch (error) {
    console.error('Error details:', error); 
    res.status(500).json({ message: 'Error submitting evaluation', error });
  }
});

module.exports = router;