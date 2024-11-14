const { Menu, Item_Pesanan, Kategori } = require("../models");
const fs = require("fs");
const path = require("path");

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

		const menuData = {
			...menu.dataValues,
			kategori: menu.kategori.nama_kategori,
		};

		res.status(200).json({
			status: true,
			message: "Data menu berhasil didapatkan",
			data: menuData,
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
		const { nama_menu, harga, nama_kategori, deskripsi } = req.body;
		const gambar = req.file;

		let kategori = await Kategori.findOne({
			where: { nama_kategori },
		});

		if (!kategori) {
			kategori = await Kategori.create({ nama_kategori });
		}

		const menu = await Menu.create({
			nama_menu,
			harga,
			id_kategori: kategori.id,
			deskripsi,
			gambar: gambar.originalname,
		});

		const uploadPath = path.join(
			__dirname,
			"../../uploads",
			gambar.originalname
		);
		fs.renameSync(gambar.path, uploadPath);

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
		const { nama_menu, harga, nama_kategori, deskripsi } = req.body;
		const gambar = req.file;

		const menu = await Menu.findByPk(id);
		if (!menu) {
			return res.json({ message: "Menu not found" }).status(404);
		}

		let kategori = await Kategori.findOne({
			where: { nama_kategori },
		});

		if (!kategori) {
			return res.json({ message: "Kategori not found" }).status(404);
		}

		if (gambar && menu.gambar) {
			const oldFilePath = path.join(__dirname, "../../uploads", menu.gambar);
			if (fs.existsSync(oldFilePath)) {
				fs.unlinkSync(oldFilePath);
			}
		}

		await menu.update({
			nama_menu,
			harga,
			id_kategori: kategori.id,
			deskripsi,
			gambar: gambar ? gambar.originalname : menu.gambar,
		});

		if (gambar) {
			const uploadPath = path.join(
				__dirname,
				"../../uploads",
				gambar.originalname
			);
			fs.renameSync(gambar.path, uploadPath);
		}

		const data = {
			status: true,
			data: menu,
			message: "Successfully updated menu",
		};
		return res.json(data).status(200);
	} catch (error) {
		return res.json(error).status(500);
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
			const filePath = path.join(__dirname, "../../uploads", menu.gambar);
			if (fs.existsSync(filePath)) {
				fs.unlinkSync(filePath);
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
	createMenu,
	updateMenu,
	deleteMenu,
	addMenuToOrder,
};
