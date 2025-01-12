const express = require("express");
const router = express.Router();
const {
	getKategori,
	getKategoriByUser,
	getKategoriByUserId,
	getKategoriById,
	createKategori,
	updateKategori,
	deleteKategori,
} = require("../controllers/kategori.controller");

const { verifyAllUser } = require("../middleware/verifyTokens");

router.get("/user", verifyAllUser, getKategoriByUser);
router.post("/", verifyAllUser, createKategori);

router.get("/", getKategori);
router.get("/user/:id", getKategoriByUserId);
router.get("/:id", getKategoriById);
router.put("/:id", updateKategori);
router.delete("/:id", deleteKategori);

module.exports = router;
