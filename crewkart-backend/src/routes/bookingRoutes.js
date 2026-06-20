const express = require("express");

const {
  createBooking,
  getBookings,
} = require("../controllers/bookingController");

const {
  protect,
  adminOnly,
  clientOnly,
} = require("../middlewares/authMiddleware");

const router = express.Router();


// Client creates booking
router.post(
  "/create",
  protect,
  clientOnly,
  createBooking
);


// Admin gets all bookings
router.get(
  "/all",
  protect,
  adminOnly,
  getBookings
);

module.exports = router;