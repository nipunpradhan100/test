const User = require("../models/User");
const Booking = require("../models/Booking");

exports.getAvailableCrew = async (req, res, next) => {
  const { city } = req.params;
  const crews = await User.find({ role: "crew", city, available: true });
  res.status(200).json(crews);
};

exports.assignCrew = async (req, res, next) => {
  const { bookingId, crewId } = req.body;

  const booking = await Booking.findById(bookingId);
  if (!booking) return res.status(404).json({ message: "Booking not found" });

  booking.crew = crewId;
  booking.status = "assigned";
  await booking.save();

  res.status(200).json({ message: "Crew assigned successfully", booking });
};

exports.updateBookingStatus = async (req, res, next) => {
  const { bookingId, status } = req.body;

  // SECURITY: Only allow crew to accept or reject
  const allowedStatuses = ["accepted", "rejected"];
  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({ message: "Invalid status update" });
  }

  const booking = await Booking.findById(bookingId);
  if (!booking) return res.status(404).json({ message: "Booking not found" });

  booking.status = status;
  await booking.save();

  res.status(200).json({ message: "Booking updated", booking });
};

exports.getCrewBookings = async (req, res, next) => {
  const bookings = await Booking.find({ crew: req.user.id }).populate("client", "name phone location");
  res.status(200).json(bookings);
};

exports.toggleAvailability = async (req, res, next) => {
  // Use findByIdAndUpdate for cleaner code
  const crew = await User.findByIdAndUpdate(
    req.user.id,
    [{ $set: { available: { $not: "$available" } } }], // MongoDB toggle trick
    { new: true }
  );

  res.status(200).json({
    message: "Availability updated",
    available: crew.available,
  });
};