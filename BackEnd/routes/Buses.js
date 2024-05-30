const express = require("express");
const router = express.Router();
const { createBus, updateBus, deleteBus } = require("../controllers/busController");

router.route("/").post(createBus);

router.route("/:id").put(updateBus).delete(deleteBus);

module.exports = router;
