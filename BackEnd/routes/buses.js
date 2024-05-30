const express = require('express');
const BusDetails = require('../models/BusDetails'); // Ensure this path is correct

const router = express.Router();

// GET /api/buses
router.get('/', async (req, res) => {
    try {
        const busesDetails = await BusDetails.find();
        res.json(busesDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST /api/buses
router.post('/', async (req, res) => {
    const { busID, origin, destination, passengerCount, arrivalTime, departureTime, price } = req.body;
    console.log('Request Body:', req.body); // Log the request body to check its structure and content

    // Check if all required fields are present
    if (!busID || !origin || !destination || !passengerCount || !arrivalTime || !departureTime || !price) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const newBus = new BusDetails({ busID, origin, destination, passengerCount, arrivalTime, departureTime, price });
    try {
        const savedBus = await newBus.save();
        res.status(201).json(savedBus);
    } catch (error) {
        console.error('Error saving bus:', error);
        res.status(400).json({ message: error.message });
    }
});

// PUT /api/buses/:id
router.put('/:id', async (req, res) => {
    const { busID, origin, destination, passengerCount, arrivalTime, departureTime, price } = req.body;
    try {
        const updatedBus = await BusDetails.findByIdAndUpdate(
            req.params.id,
            { busID, origin, destination, passengerCount, arrivalTime, departureTime, price },
            { new: true, runValidators: true }
        );

        if (!updatedBus) {
            return res.status(404).json({ message: 'Bus not found' });
        }

        res.status(200).json(updatedBus);
    } catch (error) {
        console.error('Error updating bus:', error);
        res.status(400).json({ message: error.message });
    }
});

// DELETE /api/buses/:id
router.delete('/:id', async (req, res) => {
    try {
        const bus = await BusDetails.findByIdAndDelete(req.params.id);
        if (!bus) {
            return res.status(404).json({ message: 'Bus not found' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
