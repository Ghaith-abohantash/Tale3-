const mongoose = require("mongoose");
const Joi = require("joi");

// Bus Schema
const BusSchema = new mongoose.Schema(
    {
        busNumber: {
            type: Number,
            required: true,
            trim: true,
            unique: true,
        },
        busCapacity: {
            type: Number,
            required: true,
        },
        From: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
        carry: {
            type: String,
            required: true,
            enum: ["30 Passenger", "50 Passenger"],
        },
        arrivalTime: {
            type: String,
            required: true,
            minlength: 7,
            maxlength: 7,
        },
        departureTime: {
            type: String,
            required: true,
            minlength: 7,
            maxlength: 7,
        },
        cost: {
            type: Number,
            required: true,
            min: 0,
        },
    },
    { timestamps: true }
);

// Bus Model
const Bus = mongoose.model("Bus", BusSchema);

// Validation create Bus
function validateCreateBus(bus) {
    const schema = Joi.object({
        busNumber: Joi.number().required(),
        busCapacity: Joi.number().required(),
        From: Joi.string().required(),
        to: Joi.string().required(),
        carry: Joi.string().valid("30 Passenger", "50 Passenger").required(),
        arrivalTime: Joi.string().min(7).max(7).required(),
        departureTime: Joi.string().min(7).max(7).required(),
        cost: Joi.number().min(0).required(),
    });
    return schema.validate(bus);
}

// Validation update Bus
function validateUpdateBus(bus) {
    const schema = Joi.object({
        busNumber: Joi.number(),
        busCapacity: Joi.number(),
        From: Joi.string(),
        to: Joi.string(),
        carry: Joi.string().valid("30 Passenger", "50 Passenger"),
        arrivalTime: Joi.string().min(7).max(7),
        departureTime: Joi.string().min(7).max(7),
        cost: Joi.number().min(0),
    });
    return schema.validate(bus);
}

module.exports = {
    Bus,
    validateCreateBus,
    validateUpdateBus
};
