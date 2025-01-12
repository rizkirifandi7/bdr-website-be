const router = require("express").Router();

const {
	getPesanan,
	getPesananById,
	getAllPesananByUserId,
	getAllPesananByIdUser,
	getPesananInformation,
	createPesanan,
	updatePesanan,
	deletePesanan,
	getPesananByCodePayment,
} = require("../controllers/order-menu.controller");
const { verifyMitra } = require("../middleware/verifyTokens");

router.get("/user", verifyMitra, getAllPesananByUserId);
router.post("/", verifyMitra, createPesanan);

router.get("/", getPesanan);
router.get("/information", getPesananInformation);
router.get("/:id", getPesananById);
router.get("/user/:id", getAllPesananByIdUser);
router.get("/code-payment/:code_payment", getPesananByCodePayment);
router.put("/:id", updatePesanan);
router.delete("/:id", deletePesanan);

module.exports = router;
