const express = require("express");
const router = express.Router();
const {
	getFeedback,
	getFeedbackById,
	createFeedback,
	updateFeedback,
	deleteFeedback,
} = require("../controllers/feedback.controller");

router.get("/", getFeedback);
router.get("/:id", getFeedbackById);
router.post("/", createFeedback);
router.put("/:id", updateFeedback);
router.delete("/:id", deleteFeedback);

module.exports = router;
