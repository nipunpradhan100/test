const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    crew: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    service: String,

    package: String,

    city: String,

    location: String,

    date: String,

    time: String,

    status: {
      type: String,
      enum: [
        "pending",
        "assigned",
        "accepted",
        "rejected",
        "completed",
      ],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);