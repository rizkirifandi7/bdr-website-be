const express = require("express");
const router = express.Router();
const {
	createPesanan,
	getAllPesanan,
	getPesananById,
	updatePesanan,
	deletePesanan,
} = require("../controllers/order.controller");

router.get("/", getAllPesanan);
router.get("/:id", getPesananById);
router.post("/", createPesanan);
router.put("/:id", updatePesanan);
router.delete("/:id", deletePesanan);

module.exports = router;
