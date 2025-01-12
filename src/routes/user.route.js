const express = require("express");
const router = express.Router();

const {
	getUsers,
	getUserById,
	getUserDataPenjualan,
	createUser,
	updateUser,
	deleteUser,
} = require("../controllers/user.controller");

router.get("/", getUsers);
router.get("/data-penjualan/:id", getUserDataPenjualan);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
