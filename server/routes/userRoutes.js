const express = require("express");
const router = express.Router();
const user = require("../models/user");

//get all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

//register one user
router.post("/register", async (req, res) => {
  const { email, username } = req.body;
  try {
    const existingUser = await user.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User exists" });

    const newUser = new User({ email: "bereket@gmail.com", username: "beki" });
    await newUser.save();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
