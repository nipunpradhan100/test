const Booking = require("../models/Booking");

exports.createBooking = async (req, res, next) => {
  // ONLY accept these specific fields from the client
  const { service, package: packageName, city, location, date, time } = req.body;

  const booking = await Booking.create({
    service,
    package: packageName,
    city,
    location,
    date,
    time,
    client: req.user.id, // Force the client ID from the token
  });

  res.status(201).json({ message: "Booking created", booking });
};

exports.getBookings = async (req, res, next) => {
  const bookings = await Booking.find()
    .populate("client", "name email city") // Only populate needed fields
    .populate("crew", "name email city");

  res.status(200).json(bookings);
};