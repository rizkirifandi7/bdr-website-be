const router = require("express").Router();

const {
	getOrderBahanDetail,
	getOrderBahanDetailById,
	createOrderBahanDetail,
	updateOrderBahanDetail,
	deleteOrderBahanDetail,
} = require("../controllers/order-bahan-detail.controller");

router.get("/", getOrderBahanDetail);
router.get("/:id", getOrderBahanDetailById);
router.post("/", createOrderBahanDetail);
router.put("/:id", updateOrderBahanDetail);
router.delete("/:id", deleteOrderBahanDetail);

module.exports = router;
