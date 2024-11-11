const { Meja } = require("../models");

const getMeja = async (req, res) => {
	try {
		const meja = await Meja.findAll();

		res.status(200).json({
			status: true,
			message: "Data meja berhasil didapatkan",
			data: meja,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getMejaById = async (req, res) => {
	try {
		const { id } = req.params;

		const meja = await Meja.findOne({
			where: { id },
		});

		if (!meja) {
			return res.status(404).json({
				status: false,
				message: "Data meja tidak ditemukan",
			});
		}

		res.status(200).json({
			status: true,
			message: "Data meja berhasil didapatkan",
			data: meja,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const createMeja = async (req, res) => {
	try {
		const { nomor_meja } = req.body;

		const meja = await Meja.create({
			nomor_meja,
		});

		res.status(201).json({
			status: true,
			message: "Meja berhasil ditambahkan",
			data: meja,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const updateMeja = async (req, res) => {
	try {
		const { id } = req.params;
		const { nomor_meja } = req.body;

		const meja = await Meja.findOne({
			where: { id },
		});

		if (!meja) {
			return res.status(404).json({
				status: false,
				message: "Data meja tidak ditemukan",
			});
		}

		meja.nomor_meja = nomor_meja;
		await meja.save();

		res.status(200).json({
			status: true,
			message: "Data meja berhasil diubah",
			data: meja,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const deleteMeja = async (req, res) => {
	try {
		const { id } = req.params;

		const meja = await Meja.findOne({
			where: { id },
		});

		if (!meja) {
			return res.status(404).json({
				status: false,
				message: "Data meja tidak ditemukan",
			});
		}

		await meja.destroy();

		res.status(200).json({
			status: true,
			message: "Data meja berhasil dihapus",
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

module.exports = {
	getMeja,
	getMejaById,
	createMeja,
	updateMeja,
	deleteMeja,
};
