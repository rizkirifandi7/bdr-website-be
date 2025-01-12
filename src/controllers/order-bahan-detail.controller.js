const { Order_Bahan_Detail } = require("../models");

const getOrderBahanDetail = async (req, res) => {
	try {
		const order_bahan_detail = await Order_Bahan_Detail.findAll();

		res.status(200).json({
			status: true,
			message: "Data order bahan detail berhasil didapatkan",
			data: order_bahan_detail,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getOrderBahanDetailById = async (req, res) => {
	try {
		const { id } = req.params;

		const order_bahan_detail = await Order_Bahan_Detail.findOne({
			where: { id },
		});

		if (!order_bahan_detail) {
			return res.status(404).json({
				status: false,
				message: "Data order bahan detail tidak ditemukan",
			});
		}

		res.status(200).json({
			status: true,
			message: "Data order bahan detail berhasil didapatkan",
			data: order_bahan_detail,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const createOrderBahanDetail = async (req, res) => {
	try {
		const { id_order_bahan, id_bahan_baku, jumlah, harga } = req.body;

		const order_bahan_detail = await Order_Bahan_Detail.create({
			id_order_bahan,
			id_bahan_baku,
			jumlah,
			harga,
		});

		res.status(201).json({
			status: true,
			message: "Data order bahan detail berhasil ditambahkan",
			data: order_bahan_detail,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const updateOrderBahanDetail = async (req, res) => {
	try {
		const { id } = req.params;
		const { id_order_bahan, id_bahan_baku, jumlah, harga } = req.body;

		const order_bahan_detail = await Order_Bahan_Detail.findOne({
			where: { id },
		});

		if (!order_bahan_detail) {
			return res.status(404).json({
				status: false,
				message: "Data order bahan detail tidak ditemukan",
			});
		}

		await order_bahan_detail.update({
			id_order_bahan,
			id_bahan_baku,
			jumlah,
			harga,
		});

		res.status(200).json({
			status: true,
			message: "Data order bahan detail berhasil diubah",
			data: order_bahan_detail,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const deleteOrderBahanDetail = async (req, res) => {
	try {
		const { id } = req.params;

		const order_bahan_detail = await Order_Bahan_Detail.findOne({
			where: { id },
		});

		if (!order_bahan_detail) {
			return res.status(404).json({
				status: false,
				message: "Data order bahan detail tidak ditemukan",
			});
		}

		await order_bahan_detail.destroy();

		res.status(200).json({
			status: true,
			message: "Data order bahan detail berhasil dihapus",
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

module.exports = {
	getOrderBahanDetail,
	getOrderBahanDetailById,
	createOrderBahanDetail,
	updateOrderBahanDetail,
	deleteOrderBahanDetail,
};
