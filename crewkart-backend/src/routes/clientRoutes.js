const express = require("express");

const {
  getMyBookings,
} = require("../controllers/clientController");

const {
  protect,
  clientOnly,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.get(
  "/bookings",
  protect,
  clientOnly,
  getMyBookings
);

module.exports = router;
