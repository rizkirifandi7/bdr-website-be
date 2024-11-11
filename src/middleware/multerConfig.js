const multer = require("multer");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./uploads");
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

const fileFilter = (req, file, cb) => {
	if (
		file.mimetype === "image/jpeg" ||
		file.mimetype === "image/png" ||
		file.mimetype === "image/jpg" ||
		file.mimetype === "image/svg"
	) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({
	fileFilter: fileFilter,
	storage: storage,
});

module.exports = upload;
