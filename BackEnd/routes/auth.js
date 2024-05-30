const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const asyncHandler = require("express-async-handler");

router.post("/register", asyncHandler(async (req, res) => {
    const { email, username, password, isAdmin } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    let user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: "This user already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
        email,
        username,
        password: hashedPassword,
        isAdmin
    });

    const result = await user.save();

    const token = jwt.sign({ id: user._id, username: user.username, isAdmin: user.isAdmin }, process.env.JWT_SECRET_KEY);
    
    const { password: _, ...other } = result._doc;

    res.status(201).json({ ...other, token });
}));




router.post("/login", asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    let user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        return res.status(400).json({ message: "Invalid password" });
    }

    const tokenData = {
        id: user._id,
        username: user.username,
        isAdmin: user.email === 'admin@example.com' 
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY);

    res.status(200).json({ token, isAdmin: tokenData.isAdmin });
}));


  
module.exports = router;
