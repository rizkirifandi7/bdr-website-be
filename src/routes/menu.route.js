const router = require("express").Router();

const {
	getMenu,
	getMenuById,
	getAllMenyByUserId,
	getAllMenyByIdUser,
	createMenu,
	updateMenu,
	deleteMenu,
	addMenuToOrder,
} = require("../controllers/menu.controller");
const upload = require("../middleware/multerConfig");
const { verifyAllUser } = require("../middleware/verifyTokens");

router.get("/user", verifyAllUser, getAllMenyByUserId);
router.post("/", verifyAllUser, upload.single("gambar"), createMenu);
router.put("/:id", upload.single("gambar"), updateMenu);

router.get("/", getMenu);
router.get("/:id", getMenuById);
router.get("/user/:id", getAllMenyByIdUser);
router.post("/:id/items", addMenuToOrder);
router.delete("/:id", deleteMenu);

module.exports = router;
