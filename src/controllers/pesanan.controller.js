const { Pesanan, Item_Pesanan, Menu, Kategori } = require("../models");

const getPesanan = async (req, res) => {
	try {
		const pesanan = await Pesanan.findAll({
			include: [
				{
					model: Item_Pesanan,
					as: "item_pesanan",
					attributes: ["id", "jumlah", "subtotal", "id_menu", "id_pesanan"],
					include: [
						{
							model: Menu,
							as: "menu",
							include: [
								{
									model: Kategori,
									as: "kategori",
									attributes: ["nama_kategori"],
								},
							],
						},
					],
				},
			],
		});

		res.status(200).json({
			status: true,
			message: "Data pesanan berhasil didapatkan",
			data: pesanan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getPesananById = async (req, res) => {
	try {
		const { id } = req.params;

		const pesanan = await Pesanan.findOne({
			where: { id },
			include: [
				{
					model: Item_Pesanan,
					as: "item_pesanan",
					attributes: ["id", "jumlah", "subtotal", "id_menu", "id_pesanan"],
					include: [
						{
							model: Menu,
							as: "menu",
							include: [
								{
									model: Kategori,
									as: "kategori",
									attributes: ["nama_kategori"],
								},
							],
						},
					],
				},
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
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const createPesanan = async (req, res) => {
	try {
		const { id_meja, mode, total, items } = req.body;

		console.log("itemss ", items);

		const pesanan = await Pesanan.create({
			id_meja,
			mode,
			total,
			order_time: Date.now(),
			status: "pending",
		});

		// Tambah Item Pesanan
		const itemsToCreate = items.map((item) => ({
			...item,
			id_pesanan: pesanan.id,
			id_menu: item.id_menu,
			jumlah: item.quantity,
			subtotal: item.harga * item.quantity,
		}));

		await Item_Pesanan.bulkCreate(itemsToCreate);

		res.status(201).json({
			status: true,
			message: "Pesanan berhasil ditambahkan",
			data: pesanan,
		});
	} catch (error) {
		console.log("error", error);
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const updatePesanan = async (req, res) => {
	try {
		const { id } = req.params;
		const { id_meja, status } = req.body;

		const pesanan = await Pesanan.findOne({
			where: { id },
		});

		if (!pesanan) {
			return res.status(404).json({
				status: false,
				message: "Data pesanan tidak ditemukan",
			});
		}

		await pesanan.update({
			id_meja,
			order_time: Date.now(),
			status,
		});

		res.status(200).json({
			status: true,
			message: "Data pesanan berhasil diubah",
			data: pesanan,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const deletePesanan = async (req, res) => {
	try {
		const { id } = req.params;

		const pesanan = await Pesanan.findOne({
			where: { id },
		});

		if (!pesanan) {
			return res.status(404).json({
				status: false,
				message: "Data pesanan tidak ditemukan",
			});
		}

		await pesanan.destroy();

		res.status(200).json({
			status: true,
			message: "Data pesanan berhasil dihapus",
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

module.exports = {
	getPesanan,
	getPesananById,
	createPesanan,
	updatePesanan,
	deletePesanan,
};
