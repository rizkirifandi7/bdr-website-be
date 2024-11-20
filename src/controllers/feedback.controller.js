const { Feedback, Pesanan } = require("../models");

const getFeedback = async (req, res) => {
	try {
		const feedback = await Feedback.findAll({
			include: [
				{
					model: Pesanan,
					as: "pesanan",
					attributes: ["nama_pelanggan"],
				},
			],
		});

		const feedbackWithCustomerName = feedback.map((fb) => {
			const { pesanan, ...feedbackData } = fb.toJSON();
			return {
				...feedbackData,
				nama_pelanggan: pesanan ? pesanan.nama_pelanggan : null,
			};
		});

		res.status(200).json({
			status: true,
			message: "Data feedback berhasil didapatkan",
			data: feedbackWithCustomerName,
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
		const { id_pesanan, deskripsi, rating } = req.body;

		const feedback = await Feedback.create({
			id_pesanan,
			deskripsi,
			rating,
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
		const { id_pesanan, deskripsi, rating } = req.body;

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
			id_pesanan,
			deskripsi,
			rating,
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
