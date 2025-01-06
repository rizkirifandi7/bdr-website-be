const { Bahan_Baku } = require("../models");

const getBahanBaku = async (req, res) => {
	try {
		const bahan_baku = await Bahan_Baku.findAll();

		res.status(200).json({
			status: true,
			message: "Data bahan baku berhasil didapatkan",
			data: bahan_baku,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getBahanBakuById = async (req, res) => {
	try {
		const { id } = req.params;

		const bahan_baku = await Bahan_Baku.findOne({
			where: { id },
		});

		if (!bahan_baku) {
			return res.status(404).json({
				status: false,
				message: "Data bahan baku tidak ditemukan",
			});
		}

		res.status(200).json({
			status: true,
			message: "Data bahan baku berhasil didapatkan",
			data: bahan_baku,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const createBahanBaku = async (req, res) => {
	try {
		const { nama_bahan, jumlah, harga } = req.body;

		const bahan_baku = await Bahan_Baku.create({
			nama_bahan,
			jumlah,
			harga,
		});

		res.status(201).json({
			status: true,
			message: "Data bahan baku berhasil ditambahkan",
			data: bahan_baku,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const updateBahanBaku = async (req, res) => {
	try {
		const { id } = req.params;
		const { nama_bahan, jumlah, harga } = req.body;

		const bahan_baku = await Bahan_Baku.findOne({
			where: { id },
		});

		if (!bahan_baku) {
			return res.status(404).json({
				status: false,
				message: "Data bahan baku tidak ditemukan",
			});
		}

		await bahan_baku.update({
			nama_bahan,
			jumlah,
			harga,
		});

		res.status(200).json({
			status: true,
			message: "Data bahan baku berhasil diubah",
			data: bahan_baku,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const deleteBahanBaku = async (req, res) => {
	try {
		const { id } = req.params;

		const bahan_baku = await Bahan_Baku.findOne({
			where: { id },
		});

		if (!bahan_baku) {
			return res.status(404).json({
				status: false,
				message: "Data bahan baku tidak ditemukan",
			});
		}

		await bahan_baku.destroy();

		res.status(200).json({
			status: true,
			message: "Data bahan baku berhasil dihapus",
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

module.exports = {
	getBahanBaku,
	getBahanBakuById,
	createBahanBaku,
	updateBahanBaku,
	deleteBahanBaku,
};
