const Booking = require("../models/Booking");

exports.getMyBookings = async (req, res, next) => {
  const bookings = await Booking.find({ client: req.user.id }).populate("crew", "name city");
  res.status(200).json(bookings);
};