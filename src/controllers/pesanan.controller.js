const { Pesanan, Item_Pesanan, Menu, Kategori } = require("../models");
const Midtrans = require("midtrans-client");

const dotenv = require("dotenv");
const crypto = require("crypto");
dotenv.config();

let snap = new Midtrans.Snap({
	isProduction: false,
	serverKey: process.env.MIDTRANS_SERVER_KEY,
	clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

const getPesanan = async (req, res) => {
	try {
		const pesanan = await Pesanan.findAll({
			include: [
				{
					model: Item_Pesanan,
					as: "item_pesanan",
					attributes: ["id", "jumlah", "subtotal", "id_menu", "id_pesanan"],
					include: [
						{
							model: Menu,
							as: "menu",
							include: [
								{
									model: Kategori,
									as: "kategori",
									attributes: ["nama_kategori"],
								},
							],
						},
					],
				},
			],
		});

		res.status(200).json({
			status: true,
			message: "Data pesanan berhasil didapatkan",
			data: pesanan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getPesananById = async (req, res) => {
	try {
		const { id } = req.params;

		const pesanan = await Pesanan.findOne({
			where: { id },
			include: [
				{
					model: Item_Pesanan,
					as: "item_pesanan",
					attributes: ["id", "jumlah", "subtotal", "id_menu", "id_pesanan"],
					include: [
						{
							model: Menu,
							as: "menu",
							include: [
								{
									model: Kategori,
									as: "kategori",
									attributes: ["nama_kategori"],
								},
							],
						},
					],
				},
			],
		});

		if (!pesanan) {
			return res.status(404).json({
				status: false,
				message: "Data pesanan tidak ditemukan",
			});
		}

		res.status(200).json({
			status: true,
			message: "Data pesanan berhasil didapatkan",
			data: pesanan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getPesananByCodePayment = async (req, res) => {
	try {
		const { code_payment } = req.params;

		const pesanan = await Pesanan.findOne({
			where: { code_payment },
			include: [
				{
					model: Item_Pesanan,
					as: "item_pesanan",
					attributes: ["id", "jumlah", "subtotal", "id_menu", "id_pesanan"],
					include: [
						{
							model: Menu,
							as: "menu",
							include: [
								{
									model: Kategori,
									as: "kategori",
									attributes: ["nama_kategori"],
								},
							],
						},
					],
				},
			],
		});

		if (!pesanan) {
			return res.status(404).json({
				status: false,
				message: "Data pesanan tidak ditemukan",
			});
		}

		res.status(200).json({
			status: true,
			message: "Data pesanan berhasil didapatkan",
			data: pesanan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const createSnapToken = async (req, res) => {
	try {
		const { total, items, fullname, code_payment } = req.body;

		let parameter = {
			transaction_details: {
				order_id: `${code_payment}`,
				gross_amount: total,
			},
			customer_details: {
				first_name: fullname,
			},
			credit_card: {
				secure: true,
			},
			item_details: items.map((item) => ({
				id: item.id_menu,
				price: item.harga,
				quantity: item.quantity,
				name: item.nama,
			})),
			callbacks: {
				finish: `${process.env.BASE_URL}/order/order-detail/${code_payment}`,
				unfinish: `${process.env.BASE_URL}/order/tipemode`,
				error: `$${process.env.BASE_URL}/order/tipemode`,
			},
		};

		const snapToken = await snap.createTransaction(parameter);

		res.status(200).json({
			status: true,
			message: "Token berhasil didapatkan",
			token: snapToken.token,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const createPesanan = async (req, res) => {
	try {
		const {
			id_meja,
			mode,
			total,
			items,
			code_payment,
			nama_pelanggan,
			status,
			catatan,
		} = req.body;

		const pesanan = await Pesanan.create({
			nama_pelanggan,
			code_payment,
			id_meja,
			mode,
			total,
			order_time: Date.now(),
			status: status || "pending",
			catatan,
		});

		const itemsToCreate = items.map((item) => ({
			...item,
			id_pesanan: pesanan.id,
			id_menu: item.id_menu,
			jumlah: item.quantity,
			subtotal: item.harga * item.quantity,
		}));

		await Item_Pesanan.bulkCreate(itemsToCreate);

		res.status(201).json({
			status: true,
			message: "Pesanan berhasil ditambahkan",
			data: pesanan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const updatePesanan = async (req, res) => {
	try {
		const { id } = req.params;
		const { id_meja, status } = req.body;

		const pesanan = await Pesanan.findOne({
			where: { id },
		});

		if (!pesanan) {
			return res.status(404).json({
				status: false,
				message: "Data pesanan tidak ditemukan",
			});
		}

		await pesanan.update({
			id_meja,
			order_time: Date.now(),
			status,
		});

		res.status(200).json({
			status: true,
			message: "Data pesanan berhasil diubah",
			data: pesanan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const deletePesanan = async (req, res) => {
	try {
		const { id } = req.params;

		const pesanan = await Pesanan.findOne({
			where: { id },
		});

		if (!pesanan) {
			return res.status(404).json({
				status: false,
				message: "Data pesanan tidak ditemukan",
			});
		}

		await pesanan.destroy();

		res.status(200).json({
			status: true,
			message: "Data pesanan berhasil dihapus",
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

module.exports = {
	getPesanan,
	getPesananById,
	createPesanan,
	updatePesanan,
	deletePesanan,
	getPesananByCodePayment,
	createSnapToken,
};
