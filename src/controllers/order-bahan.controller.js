const { Order_Bahan, Order_Bahan_Detail } = require("../models");

const getOrderBahan = async (req, res) => {
	try {
		const order_bahan = await Order_Bahan.findAll();

		res.status(200).json({
			status: true,
			message: "Data order bahan berhasil didapatkan",
			data: order_bahan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getOrderBahanById = async (req, res) => {
	try {
		const { id } = req.params;

		const order_bahan = await Order_Bahan.findOne({
			where: { id },
		});

		if (!order_bahan) {
			return res.status(404).json({
				status: false,
				message: "Data order bahan tidak ditemukan",
			});
		}

		res.status(200).json({
			status: true,
			message: "Data order bahan berhasil didapatkan",
			data: order_bahan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const createOrderBahan = async (req, res) => {
	try {
		const user = req.user;
		const { status, total_harga, items } = req.body;

		const order_bahan = await Order_Bahan.create({
			id_user: user.id,
			status,
			total_harga,
		});

		const itemsToCreate = items.map((item) => ({
			...item,
			id_order_bahan: pesanan.id,
			id_bahan_baku: item.id_menu,
			jumlah: item.quantity,
			harga: item.harga * item.quantity,
		}));

		await Order_Bahan_Detail.bulkCreate(itemsToCreate);

		res.status(201).json({
			status: true,
			message: "Data order bahan berhasil ditambahkan",
			data: order_bahan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const updateOrderBahan = async (req, res) => {
	try {
		const { id } = req.params;
		const { status, total_harga } = req.body;

		const order_bahan = await Order_Bahan.findOne({
			where: { id },
		});

		if (!order_bahan) {
			return res.status(404).json({
				status: false,
				message: "Data order bahan tidak ditemukan",
			});
		}

		await order_bahan.update({
			status,
			total_harga,
		});

		res.status(200).json({
			status: true,
			message: "Data order bahan berhasil diubah",
			data: order_bahan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const deleteOrderBahan = async (req, res) => {
	try {
		const { id } = req.params;

		const order_bahan = await Order_Bahan.findOne({
			where: { id },
		});

		if (!order_bahan) {
			return res.status(404).json({
				status: false,
				message: "Data order bahan tidak ditemukan",
			});
		}

		await order_bahan.destroy();

		res.status(200).json({
			status: true,
			message: "Data order bahan berhasil dihapus",
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

module.exports = {
	getOrderBahan,
	getOrderBahanById,
	createOrderBahan,
	updateOrderBahan,
	deleteOrderBahan,
};
