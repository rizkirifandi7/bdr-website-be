"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Kategoris", [
			{
				nama_kategori: "Mie Bakso",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				nama_kategori: "Mie Yamin",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				nama_kategori: "Mie Yamientiaw",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				nama_kategori: "Mie Ayam",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				nama_kategori: "Minuman",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Kategoris", null, {});
	},
};

