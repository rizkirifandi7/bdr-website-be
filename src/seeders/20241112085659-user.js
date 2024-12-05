"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Users", [
			{
				nama: "admin",
				email: "admin@test.com",
				password: bcrypt.hashSync("admin", 10),
				role: "admin",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				nama: "pegawai",
				email: "pegawai@test.com",
				password: bcrypt.hashSync("pegawai", 10),
				role: "pegawai",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				nama: "adminhome",
				email: "adminhome@test.com",
				password: bcrypt.hashSync("adminhome", 10),
				role: "adminhome",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Users", null, {});
	},
};

