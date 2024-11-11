const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
	try {
		const { nama, email, password, retypePassword, role } = req.body;

		console.log("data register", nama);

		if (!password) {
			return res.status(400).json({
				message: "Password is required",
				status: false,
			});
		}

		if (password !== retypePassword) {
			return res.status(400).json({
				message: "Passwords do not match",
				status: false,
			});
		}

		const checkUser = await User.findOne({
			where: { email },
		});

		if (checkUser) {
			return res.status(400).json({
				message: "Email sudah terdaftar",
				status: false,
			});
		}

		const hashedPassword = bcrypt.hashSync(password, 10);

		const user = await User.create({
			nama,
			email,
			password: hashedPassword,
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

const Login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({
			where: { email },
		});

		if (!user) {
			return res.status(404).json({
				message: "User tidak ditemukan",
			});
		}

		const isMatch = bcrypt.compareSync(password, user.password);

		if (!isMatch) {
			return res.status(400).json({
				message: "Password salah",
			});
		}

		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
			expiresIn: "6h",
		});

		res.status(200).json({
			status: true,
			message: "Login berhasil",
			data: { token },
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			status: false,
		});
	}
};

module.exports = {
	Register,
	Login,
};