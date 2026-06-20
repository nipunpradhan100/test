const express = require("express");

const {
  getAvailableCrew,
  assignCrew,
  updateBookingStatus,
  getCrewBookings,
  toggleAvailability,
} = require("../controllers/crewController");

const {
  protect,
  adminOnly,
  crewOnly,
} = require("../middlewares/authMiddleware");

const router = express.Router();


// Get Available Crew
router.get(
  "/available/:city",
  protect,
  adminOnly,
  getAvailableCrew
);


// Assign Crew
router.put(
  "/assign",
  protect,
  adminOnly,
  assignCrew
);


// Crew Accept / Reject
router.put(
  "/status",
  protect,
  crewOnly,
  updateBookingStatus
);


// Crew Assigned Jobs
router.get(
  "/my-bookings",
  protect,
  crewOnly,
  getCrewBookings
);


// Toggle Availability
router.put(
  "/availability",
  protect,
  crewOnly,
  toggleAvailability
);

module.exports = router;