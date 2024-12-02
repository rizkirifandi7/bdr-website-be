const { Reservasi } = require("../models");

const getReservasi = async (req, res) => {
	try {
		const reservasi = await Reservasi.findAll();

		res.status(200).json({
			status: true,
			message: "Data reservasi berhasil didapatkan",
			data: reservasi,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getReservasiById = async (req, res) => {
	try {
		const { id } = req.params;

		const reservasi = await Reservasi.findOne({
			where: { id },
		});

		if (!reservasi) {
			return res.status(404).json({
				status: false,
				message: "Data reservasi tidak ditemukan",
			});
		}

		res.status(200).json({
			status: true,
			message: "Data reservasi berhasil didapatkan",
			data: reservasi,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const createReservasi = async (req, res) => {
	try {
		const {
			nama_pelanggan,
			kontak,
			tanggal_reservasi,
			jumlah_orang,
			catatan,
			ruangan,
		} = req.body;

		const reservasi = await Reservasi.create({
			nama_pelanggan,
			kontak,
			tanggal_reservasi,
			jumlah_orang,
			catatan,
			ruangan,
		});

		res.status(201).json({
			status: true,
			message: "Reservasi berhasil ditambahkan",
			data: reservasi,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const updateReservasi = async (req, res) => {
	try {
		const { id } = req.params;
		const {
			nama_pelanggan,
			kontak,
			tanggal_reservasi,
			jumlah_orang,
			catatan,
			ruangan,
		} = req.body;

		const reservasi = await Reservasi.findOne({
			where: { id },
		});

		if (!reservasi) {
			return res.status(404).json({
				status: false,
				message: "Data reservasi tidak ditemukan",
			});
		}

		await reservasi.update({
			nama_pelanggan,
			kontak,
			tanggal_reservasi,
			jumlah_orang,
			catatan,
			ruangan,
		});

		res.status(200).json({
			status: true,
			message: "Data reservasi berhasil diubah",
			data: reservasi,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const deleteReservasi = async (req, res) => {
	try {
		const { id } = req.params;

		const reservasi = await Reservasi.findOne({
			where: { id },
		});

		if (!reservasi) {
			return res.status(404).json({
				status: false,
				message: "Data reservasi tidak ditemukan",
			});
		}

		await reservasi.destroy();

		res.status(200).json({
			status: true,
			message: "Data reservasi berhasil dihapus",
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

module.exports = {
	getReservasi,
	getReservasiById,
	createReservasi,
	updateReservasi,
	deleteReservasi,
};
