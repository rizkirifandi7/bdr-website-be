const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyAdmin = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) return res.status(401).json({ error: "Access denied" });

	const token = authHeader.split(" ")[1];
	if (!token) return res.status(401).json({ error: "Access denied" });

	try {
		const verified = jwt.verify(token, process.env.JWT_SECRET);
		req.user = verified;

		if (req.user.role !== "admin") {
			return res.status(403).json({ error: "Access forbidden: Admins only" });
		}

		next();
	} catch (error) {
		res.status(400).json({ error: "Invalid token" });
	}
};

const verifyPegawai = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) return res.status(401).json({ error: "Access denied " });

	const token = authHeader.split(" ")[1];
	if (!token) return res.status(401).json({ error: "Access denied " });

	try {
		const verified = jwt.verify(token, process.env.JWT_SECRET);
		req.user = verified;

		if (req.user.role !== "pegawai") {
			return res.status(403).json({ error: "Access forbidden: Pegawai only" });
		}

		next();
		return req.user;
	} catch (error) {
		res.status(400).json({ error: "Invalid token" });
	}
};

const verifyAdminOrPegawai = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) return res.status(401).json({ error: "Access denied" });

	const token = authHeader.split(" ")[1];

	if (!token) return res.status(401).json({ error: "Access denied" });

	try {
		const verified = jwt.verify(token, process.env.JWT_SECRET);
		req.user = verified;

		if (req.user.role !== "admin" && req.user.role !== "pegawai") {
			return res
				.status(403)
				.json({ error: "Access forbidden: Admins or Pegawai only" });
		}

		next();
	} catch (error) {
		res.status(400).json({ error: "Invalid token" });
	}
};

module.exports = { verifyAdmin, verifyPegawai, verifyAdminOrPegawai };
