const express = require("express");
const router = express.Router();
const {
	getMeja,
	getMejaById,
	createMeja,
	updateMeja,
	deleteMeja,
} = require("../controllers/meja.controller");

router.get("/", getMeja);
router.get("/:id", getMejaById);
router.post("/", createMeja);
router.put("/:id", updateMeja);
router.delete("/:id", deleteMeja);

module.exports = router;