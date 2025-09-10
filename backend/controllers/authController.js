const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

// generate JWT token
const createToken = (userId) => jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });

// SIGN UP
const registerUser = async (req, res) => {
  console.log("REQ BODY:", req.body);

  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: "username, email, and password are required" });
    }

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // save new user
    const user = await User.create({ username, email, password: hashedPassword });

    const token = createToken(user._id);

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: { id: user._id, username: user.username, email: user.email }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// SIGN IN
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = createToken(user._id);

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, username: user.username, email: user.email }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerUser, loginUser };
