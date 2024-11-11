const express = require("express");
const router = express.Router();

const {
	getReservasi,
	getReservasiById,
	createReservasi,
	updateReservasi,
	deleteReservasi,
} = require("../controllers/reservasi.controller");

router.get("/", getReservasi);
router.get("/:id", getReservasiById);
router.post("/", createReservasi);
router.put("/:id", updateReservasi);
router.delete("/:id", deleteReservasi);

module.exports = router;
