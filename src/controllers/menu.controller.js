const { Menu, Item_Pesanan, Kategori } = require("../models");
const fs = require("fs");
const cloudinary = require("../middleware/cloudinaryConfig");

const getMenu = async (req, res) => {
	try {
		const menu = await Menu.findAll({
			include: {
				association: "kategori",
				attributes: ["nama_kategori"],
			},
		});

		const modifiedMenu = menu.map((item) => {
			return {
				...item.dataValues,
				kategori: item.kategori.nama_kategori,
			};
		});

		res.status(200).json({
			status: true,
			message: "Data menu berhasil didapatkan",
			data: modifiedMenu,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getAllMenyByUserId = async (req, res) => {
	try {
		const user = req.user;

		const menu = await Menu.findAll({
			where: { id_user: user.id },

			include: {
				association: "kategori",
				attributes: ["nama_kategori"],
			},
		});

		const modifiedMenu = menu.map((item) => {
			return {
				...item.dataValues,
				kategori: item.kategori.nama_kategori,
			};
		});

		res.status(200).json({
			status: true,
			message: "Data menu berhasil didapatkan",
			data: modifiedMenu,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getAllMenyByIdUser = async (req, res) => {
	try {
		const { id } = req.params;

		const menu = await Menu.findAll({
			where: { id_user: id },
			include: {
				association: "kategori",
				attributes: ["nama_kategori"],
			},
		});

		// Check if menu exists and has items
		if (!menu || menu.length === 0) {
			return res.status(404).json({
				status: false,
				message: "No menu items found for this user",
				data: [],
			});
		}

		const modifiedMenu = menu.map((item) => {
			// Add null check for kategori
			return {
				...item.dataValues,
				kategori: item.kategori?.nama_kategori || null,
			};
		});

		res.status(200).json({
			status: true,
			message: "Data menu berhasil didapatkan",
			data: modifiedMenu,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getMenuById = async (req, res) => {
	try {
		const { id } = req.params;

		const menu = await Menu.findOne({
			where: { id },
			include: {
				association: "kategori",
				attributes: ["nama_kategori"],
			},
		});

		if (!menu) {
			return res.status(404).json({
				status: false,
				message: "Data menu tidak ditemukan",
			});
		}

		res.status(200).json({
			status: true,
			message: "Data menu berhasil didapatkan",
			data: menu,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const addMenuToOrder = async (req, res) => {
	const { id } = req.params;
	const { id_menu, jumlah } = req.body;

	try {
		const menu = await Menu.findByPk(id_menu);
		if (!menu) {
			return res.status(404).json({
				status: false,
				message: "Menu not found",
			});
		}
		const subtotal = menu.harga * jumlah;

		await Item_Pesanan.create({
			id_pesanan: id,
			id_menu,
			jumlah,
			subtotal,
		});

		res.status(201).json({
			message: "Menu berhasil ditambahkan ke pesanan",
			status: true,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const createMenu = async (req, res) => {
	try {
		const user = req.user;
		const { nama_menu, harga, nama_kategori, deskripsi, ispopuler } = req.body;
		const gambar = req.file;

		let kategori = await Kategori.findOne({
			where: { nama_kategori },
		});

		if (!kategori) {
			kategori = await Kategori.create({ nama_kategori });
		}

		const uploadResult = await cloudinary.uploader.upload(gambar.path, {
			folder: "menu_images",
		});

		const menu = await Menu.create({
			id_user: user.id,
			nama_menu,
			harga,
			id_kategori: kategori.id,
			deskripsi,
			gambar: uploadResult.secure_url,
			ispopuler,
		});

		fs.unlinkSync(gambar.path);

		res.status(201).json({
			status: true,
			message: "Menu berhasil ditambahkan",
			data: menu,
		});
	} catch (error) {
		if (req.file) {
			fs.unlinkSync(req.file.path);
		}
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const updateMenu = async (req, res) => {
	try {
		const { id } = req.params;
		const { nama_menu, harga, nama_kategori, deskripsi, ispopuler } = req.body;
		const gambar = req.file;

		const menu = await Menu.findByPk(id);
		if (!menu) {
			return res.status(404).json({ message: "Menu not found" });
		}

		let kategori = await Kategori.findOne({
			where: { nama_kategori },
		});

		if (!kategori) {
			return res.status(404).json({ message: "Kategori not found" });
		}

		let uploadResult;
		if (gambar) {
			if (menu.gambar) {
				const oldPublicId = menu.gambar.split("/").pop().split(".")[0];
				await cloudinary.uploader.destroy(`menu_images/${oldPublicId}`);
			}
			uploadResult = await cloudinary.uploader.upload(gambar.path, {
				folder: "menu_images",
			});
			fs.unlinkSync(gambar.path);
		}

		await menu.update({
			nama_menu,
			harga,
			id_kategori: kategori.id,
			deskripsi,
			gambar: gambar ? uploadResult.secure_url : menu.gambar,
			ispopuler,
		});

		const data = {
			status: true,
			data: menu,
			message: "Successfully updated menu",
		};
		return res.status(200).json(data);
	} catch (error) {
		if (req.file) {
			fs.unlinkSync(req.file.path);
		}
		return res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const deleteMenu = async (req, res) => {
	try {
		const { id } = req.params;

		const menu = await Menu.findOne({
			where: { id },
		});

		if (!menu) {
			return res.status(404).json({
				status: false,
				message: "Data menu tidak ditemukan",
			});
		}

		const result = await Menu.destroy({
			where: { id },
		});

		if (result) {
			if (menu.gambar) {
				const oldPublicId = menu.gambar.split("/").pop().split(".")[0];
				await cloudinary.uploader.destroy(`menu_images/${oldPublicId}`);
			}

			res.status(200).json({
				status: true,
				message: "Data menu berhasil dihapus",
			});
		} else {
			res.status(500).json({
				status: false,
				message: "Data menu gagal dihapus",
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

module.exports = {
	getMenu,
	getMenuById,
	getAllMenyByUserId,
	getAllMenyByIdUser,
	createMenu,
	updateMenu,
	deleteMenu,
	addMenuToOrder,
};
