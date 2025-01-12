const router = require("express").Router();

const {
	getOrderBahan,
	getOrderBahanById,
	getAllOrderBahanByUserId,
	createOrderBahan,
	updateOrderBahan,
	deleteOrderBahan,
} = require("../controllers/order-bahan.controller");
const { verifyMitra } = require("../middleware/verifyTokens");

router.get("/user", verifyMitra, getAllOrderBahanByUserId);
router.get("/:id", verifyMitra, getOrderBahanById);
router.post("/", verifyMitra, createOrderBahan);

router.get("/", getOrderBahan);
router.put("/:id", updateOrderBahan);
router.delete("/:id", deleteOrderBahan);

module.exports = router;
