const router = require("express").Router();

const {
	getBahanBaku,
	getBahanBakuById,
	createBahanBaku,
	updateBahanBaku,
	deleteBahanBaku,
} = require("../controllers/bahan-baku.controller");

router.get("/", getBahanBaku);
router.get("/:id", getBahanBakuById);
router.post("/", createBahanBaku);
router.put("/:id", updateBahanBaku);
router.delete("/:id", deleteBahanBaku);

module.exports = router;
