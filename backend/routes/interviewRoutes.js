const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getInterviewHistory,
} = require("../controllers/interviewController");


// Get Interview History
router.get(
  "/history",
  protect,
  getInterviewHistory
);


module.exports = router;