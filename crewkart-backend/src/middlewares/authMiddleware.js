const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Verify Token
exports.protect = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // CRITICAL: Check if user still exists in DB
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User no longer exists" });
    }

    req.user = user; // Now req.user is the full DB document
    next();
  } catch (error) {
    res.status(401).json({ message: "Token failed" });
  }
};

// Role Checkers (Now safer because req.user is the full DB object)
exports.adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") return res.status(403).json({ message: "Admin access only" });
  next();
};

exports.crewOnly = (req, res, next) => {
  if (req.user.role !== "crew") return res.status(403).json({ message: "Crew access only" });
  next();
};

exports.clientOnly = (req, res, next) => {
  if (req.user.role !== "client") return res.status(403).json({ message: "Client access only" });
  next();
};