"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Bahan_Bakus", [
			{
				nama_bahan: "Bakso Cincang",
				jumlah: "1kg",
				harga: 18000,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				nama_bahan: "Bakso Urat",
				jumlah: "1kg",
				harga: 20000,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				nama_bahan: "Mie Telur",
				jumlah: "1kg",
				harga: 12000,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				nama_bahan: "Mie Kuning",
				jumlah: "1kg",
				harga: 12000,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Bahan_Bakus", null, {});
	},
};

