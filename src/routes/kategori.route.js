const express = require("express");
const router = express.Router();
const {
	getKategori,
	getKategoriById,
	createKategori,
	updateKategori,
	deleteKategori,
} = require("../controllers/kategori.controller");

router.get("/", getKategori);
router.get("/:id", getKategoriById);
router.post("/", createKategori);
router.put("/:id", updateKategori);
router.delete("/:id", deleteKategori);

module.exports = router;
