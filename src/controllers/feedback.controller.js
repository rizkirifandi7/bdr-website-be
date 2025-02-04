const { Feedback } = require("../models");

const getFeedback = async (req, res) => {
	try {
		const feedback = await Feedback.findAll();

		res.status(200).json({
			status: true,
			message: "Data feedback berhasil didapatkan",
			data: feedback,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getFeedbackById = async (req, res) => {
	try {
		const { id } = req.params;

		const feedback = await Feedback.findOne({
			where: { id },
		});

		if (!feedback) {
			return res.status(404).json({
				status: false,
				message: "Data feedback tidak ditemukan",
			});
		}

		res.status(200).json({
			status: true,
			message: "Data feedback berhasil didapatkan",
			data: feedback,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const createFeedback = async (req, res) => {
	try {
		const {
			nama,
			nomor_hp,
			saran,
			kritik,
			rating_menu,
			rating_restoran,
			rating_pelayanan,
		} = req.body;

		const feedback = await Feedback.create({
			nama,
			nomor_hp,
			saran,
			kritik,
			rating_menu,
			rating_restoran,
			rating_pelayanan,
		});

		res.status(201).json({
			status: true,
			message: "Feedback berhasil ditambahkan",
			data: feedback,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const updateFeedback = async (req, res) => {
	try {
		const { id } = req.params;
		const {
			nama,
			nomor_hp,
			saran,
			kritik,
			rating_menu,
			rating_restoran,
			rating_pelayanan,
		} = req.body;

		const feedback = await Feedback.findOne({
			where: { id },
		});

		if (!feedback) {
			return res.status(404).json({
				status: false,
				message: "Data feedback tidak ditemukan",
			});
		}

		await feedback.update({
			nama,
			nomor_hp,
			saran,
			kritik,
			rating_menu,
			rating_restoran,
			rating_pelayanan,
		});

		res.status(200).json({
			status: true,
			message: "Data feedback berhasil diubah",
			data: feedback,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const deleteFeedback = async (req, res) => {
	try {
		const { id } = req.params;

		const feedback = await Feedback.findOne({
			where: { id },
		});

		if (!feedback) {
			return res.status(404).json({
				status: false,
				message: "Data feedback tidak ditemukan",
			});
		}

		await feedback.destroy();

		res.status(200).json({
			status: true,
			message: "Data feedback berhasil dihapus",
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

module.exports = {
	getFeedback,
	getFeedbackById,
	createFeedback,
	updateFeedback,
	deleteFeedback,
};
