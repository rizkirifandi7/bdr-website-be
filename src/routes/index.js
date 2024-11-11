const express = require("express");
const router = express.Router();
const authRoute = require("./auth.route");
const menuRoute = require("./menu.route");
const reservasiRoute = require("./reservasi.route");
const userRoute = require("./user.route");
const kategoriRoute = require("./kategori.route");
const mejaRoute = require("./meja.route");
const itemPesananRoute = require("./item_pesanan.route");
const pesananRoute = require("./pesanan.route");
const feedbackRoute = require("./feedback.route");
const orderRoute = require("./order.route");

router.use("/auth", authRoute);
router.use("/menu", menuRoute);
router.use("/reservasi", reservasiRoute);
router.use("/user", userRoute);
router.use("/kategori", kategoriRoute);
router.use("/meja", mejaRoute);
router.use("/item_pesanan", itemPesananRoute);
router.use("/pesanan", pesananRoute);
router.use("/feedback", feedbackRoute);
router.use("/order", orderRoute);

module.exports = router;
