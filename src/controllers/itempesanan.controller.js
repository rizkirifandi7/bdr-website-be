const { Item_Pesanan } = require("../models");

const getItemPesanan = async (req, res) => {
	try {
		const item_pesanan = await Item_Pesanan.findAll();

		res.status(200).json({
			status: true,
			message: "Data item pesanan berhasil didapatkan",
			data: item_pesanan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getItemPesananById = async (req, res) => {
	try {
		const { id } = req.params;

		const item_pesanan = await Item_Pesanan.findOne({
			where: { id },
		});

		if (!item_pesanan) {
			return res.status(404).json({
				status: false,
				message: "Data item pesanan tidak ditemukan",
			});
		}

		res.status(200).json({
			status: true,
			message: "Data item pesanan berhasil didapatkan",
			data: item_pesanan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const createItemPesanan = async (req, res) => {
	try {
		const { id_pesanan, id_menu, jumlah, subtotal } = req.body;

		const item_pesanan = await Item_Pesanan.create({
			id_pesanan,
			id_menu,
			jumlah,
			subtotal,
		});

		res.status(201).json({
			status: true,
			message: "Item pesanan berhasil ditambahkan",
			data: item_pesanan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const updateItemPesanan = async (req, res) => {
	try {
		const { id } = req.params;
		const { id_pesanan, id_menu, jumlah } = req.body;

		const item_pesanan = await Item_Pesanan.findOne({
			where: { id },
		});

		if (!item_pesanan) {
			return res.status(404).json({
				status: false,
				message: "Data item pesanan tidak ditemukan",
			});
		}

		await item_pesanan.update({
			id_pesanan,
			id_menu,
			jumlah,
		});

		res.status(200).json({
			status: true,
			message: "Item pesanan berhasil diupdate",
			data: item_pesanan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const deleteItemPesanan = async (req, res) => {
	try {
		const { id } = req.params;

		const item_pesanan = await Item_Pesanan.findOne({
			where: { id },
		});

		if (!item_pesanan) {
			return res.status(404).json({
				status: false,
				message: "Data item pesanan tidak ditemukan",
			});
		}

		await item_pesanan.destroy();

		res.status(200).json({
			status: true,
			message: "Item pesanan berhasil dihapus",
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

module.exports = {
	getItemPesanan,
	getItemPesananById,
	createItemPesanan,
	updateItemPesanan,
	deleteItemPesanan,
};
