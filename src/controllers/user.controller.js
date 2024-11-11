const { User } = require("../models");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
	try {
		const users = await User.findAll();

		res.status(200).json({
			status: true,
			message: "Data user berhasil didapatkan",
			data: users,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const getUserById = async (req, res) => {
	try {
		const { id } = req.params;

		const user = await User.findOne({
			where: { id },
		});

		if (!user) {
			return res.status(404).json({
				status: false,
				message: "Data user tidak ditemukan",
			});
		}

		res.status(200).json({
			status: true,
			message: "Data user berhasil didapatkan",
			data: user,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const createUser = async (req, res) => {
	try {
		const { nama, email, password, role } = req.body;

		const user = await User.create({
			nama,
			email,
			password: bcrypt.hashSync(password, 10),
			role,
		});

		res.status(201).json({
			status: true,
			message: "User berhasil ditambahkan",
			data: user,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const updateUser = async (req, res) => {
	try {
		const { id } = req.params;
		const { nama, email, password, role } = req.body;

		console.log("data", req.body);

		const user = await User.findOne({
			where: { id },
		});

		if (!user) {
			return res.status(404).json({
				status: false,
				message: "Data user tidak ditemukan",
			});
		}

		user.nama = nama;
		user.email = email;
		user.password = bcrypt.hashSync(password, 10);
		user.role = role;

		await user.save();

		res.status(200).json({
			status: true,
			message: "Data user berhasil diupdate",
			data: user,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

const deleteUser = async (req, res) => {
	try {
		const { id } = req.params;

		const user = await User.findOne({
			where: { id },
		});

		if (!user) {
			return res.status(404).json({
				status: false,
				message: "Data user tidak ditemukan",
			});
		}

		await user.destroy();

		res.status(200).json({
			status: true,
			message: "Data user berhasil dihapus",
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
