const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  const { name, email, password, role, city } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
    city,
  });

  res.status(201).json({ message: "Signup successful", user });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // .select('+password') is needed because we hid it by default in the schema
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  // When sending back, use .toJSON() implicitly by just sending the object
  res.status(200).json({
    message: "Login successful",
    token,
    user: { _id: user._id, name: user.name, email: user.email, role: user.role, city: user.city }
  });
};