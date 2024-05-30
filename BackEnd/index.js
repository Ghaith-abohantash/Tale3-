const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); 
const Evaluation = require("./routes/Evaluation");
const app = express();
dotenv.config();
app.use(cors());
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to MongoDB...", err));
app.use(express.json()); 
app.use('/evaluation', Evaluation);
const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});