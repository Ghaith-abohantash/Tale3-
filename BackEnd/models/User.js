const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 200,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 200,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
   
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

module.exports = {
    User
};
