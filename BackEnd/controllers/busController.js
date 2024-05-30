const asyncHandler = require("express-async-handler");
const { validateCreateBus, validateUpdateBus, Bus } = require("../models/Bus");

const createBus = asyncHandler(async (req, res) => {
    const { error } = validateCreateBus(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    const bus = new Bus({
        busNumber: req.body.busNumber,
        From: req.body.From,
        to: req.body.to,
        carry: req.body.carry,
        arrivalTime: req.body.arrivalTime,
        departureTime: req.body.departureTime,
        cost: req.body.cost,
    });
    const result = await bus.save();
    res.status(201).json(result);
});

const updateBus = asyncHandler(async (req, res) => {
    const { error } = validateUpdateBus(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    const updatedBus = await Bus.findByIdAndUpdate(req.params.id, {
        $set: {
            busNumber: req.body.busNumber,
            From: req.body.From,
            to: req.body.to,
            carry:  req.body.carry,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            cost: req.body.cost,
        },
    }, { new: true });
    res.status(200).json(updatedBus);
});

const deleteBus = asyncHandler(async (req, res) => {
    const bus = await Bus.findById(req.params.id);
    if (bus) {
        await Bus.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "bus has been deleted" });
    } else {
        res.status(404).json({ message: "bus not found" });
    }
});

module.exports = {
    createBus,
    updateBus,
    deleteBus,
};
