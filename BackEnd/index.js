const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); 
const authpath = require("./routes/auth.js"); 
const bookingpath = require ('./routes/booking.js');
const parser= require( 'body-parser');

const userspath = require("./routes/user.js");
const Evaluationpath =require("./routes/evaluation")
const app = express();
dotenv.config();
app.use(cors());
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to MongoDB...", err));
app.use(parser.json());
app.use(express.json()); 
app.use("/api/auth", authpath); 
app.use("/api/users", userspath); 
app.use('/api/booking', bookingpath);
app.use('/evaluation', Evaluationpath);


const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});