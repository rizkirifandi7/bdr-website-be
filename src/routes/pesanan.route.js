const express = require("express");
const router = express.Router();

const {
	getPesanan,
	getPesananById,
	createPesanan,
	updatePesanan,
	deletePesanan,
	getPesananByCodePayment,
	createSnapToken,
} = require("../controllers/pesanan.controller");

router.get("/", getPesanan);
router.get("/:id", getPesananById);
router.get("/code-payment/:code_payment", getPesananByCodePayment);
router.post("/snap-token", createSnapToken);
router.post("/", createPesanan);
router.put("/:id", updatePesanan);
router.delete("/:id", deletePesanan);

module.exports = router;
