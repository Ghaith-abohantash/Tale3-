import express from 'express';
import Booking from '../models/Booking.js';
import BusDetails from '../models/BusDetails.js';
const router = express.Router();
router.get('/busDetails', async (req, res) => {
  try {
    const busDetails = await BusDetails.findOne();
    res.json(busDetails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bus details' });
  }
});
router.post('/booking', async (req, res) => {
  try {
    const { paymentMethod, name, phoneNumber, numberOfPeople, cardDetails } = req.body;
    const busDetails = await BusDetails.findOne(); 

    if (!busDetails) {
      return res.status(404).json({ error: 'Bus details not found' });
    }

    const newBooking = new Booking({
      paymentMethod,
      name,
      phoneNumber,
      numberOfPeople,
      busDestination: busDetails.destination,
      price: busDetails.price
    });

    if (paymentMethod === 'card') {
      newBooking.cardDetails = cardDetails;
    }

    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

export default router;