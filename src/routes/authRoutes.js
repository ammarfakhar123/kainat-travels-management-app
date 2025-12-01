const express = require("express");
const { register, login } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// REGISTER API
router.post("/register", register);

// LOGIN API
router.post("/login", login);

// PROTECTED ROUTE
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Protected Route Accessed",
    user: req.user,
  });
});

module.exports = router;
