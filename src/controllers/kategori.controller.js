const { Kategori } = require("../models");

const getKategori = async (req, res) => {
	try {
		const kategori = await Kategori.findAll();

		res.status(200).json({
			status: true,
			message: "Data kategori berhasil didapatkan",
			data: kategori,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getKategoriById = async (req, res) => {
	try {
		const { id } = req.params;

		const kategori = await Kategori.findOne({
			where: { id },
		});

		if (!kategori) {
			return res.status(404).json({
				status: false,
				message: "Data kategori tidak ditemukan",
			});
		}

		res.status(200).json({
			status: true,
			message: "Data kategori berhasil didapatkan",
			data: kategori,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const createKategori = async (req, res) => {
	try {
		const { nama_kategori } = req.body;

		console.log("data :", req.body);

		const kategori = await Kategori.create({
			nama_kategori,
		});

		res.status(201).json({
			status: true,
			message: "Kategori berhasil ditambahkan",
			data: kategori,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const updateKategori = async (req, res) => {
	try {
		const { id } = req.params;
		const { nama_kategori } = req.body;

		console.log("data :", req.body);

		const kategori = await Kategori.findOne({
			where: { id },
		});

		if (!kategori) {
			return res.status(404).json({
				status: false,
				message: "Data kategori tidak ditemukan",
			});
		}

		await kategori.update({
			nama_kategori,
		});

		res.status(200).json({
			status: true,
			message: "Data kategori berhasil diupdate",
			data: kategori,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const deleteKategori = async (req, res) => {
	try {
		const { id } = req.params;

		const kategori = await Kategori.findOne({
			where: { id },
		});

		if (!kategori) {
			return res.status(404).json({
				status: false,
				message: "Data kategori tidak ditemukan",
			});
		}

		await kategori.destroy();

		res.status(200).json({
			status: true,
			message: "Data kategori berhasil dihapus",
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

module.exports = {
	getKategori,
	getKategoriById,
	createKategori,
	updateKategori,
	deleteKategori,
};
