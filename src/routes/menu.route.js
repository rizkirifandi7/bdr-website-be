const express = require("express");
const router = express.Router();

const {
	getMenu,
	getMenuById,
	createMenu,
	updateMenu,
	deleteMenu,
	addMenuToOrder,
} = require("../controllers/menu.controller");
const upload = require("../middleware/multerConfig");
const path = require("path");

router.get("/", getMenu);
router.get("/:id", getMenuById);
router.post("/:id/items", addMenuToOrder);
router.post("/", upload.single("gambar"), createMenu);
router.put("/:id", upload.single("gambar"), updateMenu);
router.delete("/:id", deleteMenu);
router.get("/view/:filename", (req, res) => {
	res.sendFile(path.join(__dirname, "../../", "uploads", req.params.filename));
});

module.exports = router;
