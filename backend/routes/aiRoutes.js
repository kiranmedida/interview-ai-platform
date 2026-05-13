const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  generateQuestions,
  evaluateAnswer,
} = require("../controllers/aiController");


// Generate Questions
router.post(
  "/generate",
  protect,
  generateQuestions
);


// Evaluate Answer
router.post(
  "/evaluate",
  protect,
  evaluateAnswer
);


module.exports = router;