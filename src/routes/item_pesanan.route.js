const express = require("express");
const router = express.Router();
const {
	getItemPesanan,
	getItemPesananById,
	createItemPesanan,
	updateItemPesanan,
	deleteItemPesanan,
} = require("../controllers/itempesanan.controller");

router.get("/", getItemPesanan);
router.get("/:id", getItemPesananById);
router.post("/", createItemPesanan);
router.put("/:id", updateItemPesanan);
router.delete("/:id", deleteItemPesanan);

module.exports = router;
