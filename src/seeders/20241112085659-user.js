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
				pin: bcrypt.hashSync("123456", 10),
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				nama: "adminhome",
				email: "adminhome@test.com",
				password: bcrypt.hashSync("adminhome", 10),
				role: "adminhome",
				pin: bcrypt.hashSync("123456", 10),
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				nama: "Mitra 1",
				email: "mitra1@test.com",
				password: bcrypt.hashSync("mitra", 10),
				role: "mitra",
				pin: bcrypt.hashSync("123456", 10),
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Users", null, {});
	},
};

