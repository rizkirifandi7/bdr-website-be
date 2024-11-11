const express = require("express");
const router = express.Router();

const {
	getPesanan,
	getPesananById,
	createPesanan,
	updatePesanan,
	deletePesanan,
} = require("../controllers/pesanan.controller");

router.get("/", getPesanan);
router.get("/:id", getPesananById);
router.post("/", createPesanan);
router.put("/:id", updatePesanan);
router.delete("/:id", deletePesanan);

module.exports = router;
