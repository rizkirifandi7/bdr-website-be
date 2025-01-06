require("dotenv").config();

module.exports = {
	development: {
		username: process.env.DB_USERNAME || "root",
		password: process.env.DB_PASSWORD || null,
		database: process.env.DB_NAME || "db-dbr",
		host: process.env.DB_HOST || "127.0.0.1",
		dialect: "postgres",
	},
	test: {
		username: "root",
		password: null,
		database: "database_test",
		host: "127.0.0.1",
		dialect: "mysql",
	},
	production: {
		username: "root",
		password: null,
		database: "database_production",
		host: "127.0.0.1",
		dialect: "mysql",
	},
};

