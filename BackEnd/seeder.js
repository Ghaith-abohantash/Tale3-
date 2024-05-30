const mongoose = require("mongoose");
const BusDetails = require('./models/BusDetails');
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to MongoDB...", err));

const seedBuses = [
    { busID: '1', origin: 'Station A', destination: 'مركز المدينة', passengerCount: '40 Passenger', arrivalTime: '09:50 AM', departureTime: '10:00 AM', price: 10, passengerCount: 20 },
    { busID: '2', origin: 'Station B', destination: 'المطار', passengerCount: '30 Passenger', arrivalTime: '10:50 AM', departureTime: '11:00 AM', price: 15, passengerCount: 10 },
    // Add more bus data here
];

const seedDB = async () => {
    try {
        await BusDetails.deleteMany({});
        await BusDetails.insertMany(seedBuses);
        console.log('Database seeded');
    } catch (error) {
        console.error('Failed to seed database', error);
    } finally {
        mongoose.connection.close();
    }
};

seedDB().catch(err => {
    console.error('Failed to seed database', err);
    mongoose.connection.close();
});
