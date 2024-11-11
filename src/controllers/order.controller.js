const { Pesanan, Item_Pesanan, Meja } = require("../models");

// Buat Pesanan
const createPesanan = async (req, res) => {
	try {
		const { id_meja, total, mode, items } = req.body;

		const pesanan = await Pesanan.create({
			id_meja,
			order_time: Date.now(),
			total,
			mode,
			status: "pending",
		});

		const itemsToCreate = items.map((item) => ({
			...item,
			id_pesanan: pesanan.id,
      id_menu: item.id,
      jumlah: item.quantity,
		}));
		await Item_Pesanan.bulkCreate(itemsToCreate);

		res.status(201).json({
			status: true,
			message: "Pesanan berhasil ditambahkan",
			data: pesanan,
		});
	} catch (error) {
		console.log("ini error :", error);
		res.status(500).json({ error: error.message });
	}
};

// Baca Semua Pesanan
const getAllPesanan = async (req, res) => {
	try {
		const pesanan = await Pesanan.findAll({
			include: [{ model: Item_Pesanan, as: "item_pesanan" }],
		});
		res.status(200).json({
			status: true,
			message: "Data pesanan berhasil didapatkan",
			data: pesanan,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Baca Satu Pesanan
const getPesananById = async (req, res) => {
	try {
		const pesanan = await Pesanan.findByPk(req.params.id, {
			include: [
				{ model: Item_Pesanan, as: "item_pesanan" },
				{ model: Meja, as: "meja" },
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
		res.status(500).json({ error: error.message });
	}
};

// Update Pesanan
const updatePesanan = async (req, res) => {
	try {
		const { status } = req.body;
		const pesanan = await Pesanan.findByPk(req.params.id);
		if (pesanan) {
			pesanan.status = status;
			await pesanan.save();
			res.status(200).json({
				status: true,
				message: "Pesanan berhasil diupdate",
				data: pesanan,
			});
		} else {
			res.status(404).json({ error: "Pesanan not found" });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Hapus Pesanan
const deletePesanan = async (req, res) => {
	try {
		await Pesanan.destroy({ where: { id: req.params.id } });
		res.status(204).json({
			status: true,
			message: "Pesanan berhasil dihapus",
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	createPesanan,
	getAllPesanan,
	getPesananById,
	updatePesanan,
	deletePesanan,
};
