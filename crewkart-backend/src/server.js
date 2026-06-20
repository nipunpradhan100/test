const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const crewRoutes = require("./routes/crewRoutes");
const clientRoutes = require("./routes/clientRoutes");

connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/crew", crewRoutes);
app.use("/api/client",clientRoutes);


app.get("/", (req, res) => {
  res.send("CrewKart API Running");
});

const PORT = process.env.PORT || 5000;
// Global Error Handler (Express 5 catches async errors automatically)
app.use((err, req, res, next) => {
  console.error("Global Error:", err);
  
  // Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(val => val.message);
    return res.status(400).json({ message: messages.join(', ') });
  }
  
  // Mongoose Duplicate Key Error
  if (err.code === 11000) {
    return res.status(400).json({ message: 'Duplicate field value entered' });
  }

  res.status(500).json({ message: "Internal Server Error" });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});