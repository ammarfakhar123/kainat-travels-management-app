const User = require("../models/User");

exports.registerUser = async (req, res) => {
  try {
    const { name, phone, password } = req.body;

    const user = await User.create({ name, phone, password });

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
