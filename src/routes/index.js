const express = require("express");
const router = express.Router();
const authRoute = require("./auth.route");
const menuRoute = require("./menu.route");
const reservasiRoute = require("./reservasi.route");
const userRoute = require("./user.route");
const kategoriRoute = require("./kategori.route");
const itemPesananRoute = require("./order-menu-detail.route");
const pesananRoute = require("./order-menu.route");
const feedbackRoute = require("./feedback.route");
const bahanBakuRoute = require("./bahan-baku.route");
const bahanBakuPesananRoute = require("./order-bahan-detail.routes");
const orderBahanBakuRoute = require("./order-bahan");

router.use("/auth", authRoute);
router.use("/menu", menuRoute);
router.use("/reservasi", reservasiRoute);
router.use("/user", userRoute);
router.use("/kategori", kategoriRoute);
router.use("/item_pesanan", itemPesananRoute);
router.use("/pesanan", pesananRoute);
router.use("/feedback", feedbackRoute);
router.use("/bahan-baku", bahanBakuRoute);
router.use("/order-bahan", orderBahanBakuRoute);
router.use("/bahan-baku-detail", bahanBakuPesananRoute);

module.exports = router;
