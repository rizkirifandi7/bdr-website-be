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
				nama_kategori: "Mie Ayam",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				nama_kategori: "Mie Pangsit",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				nama_kategori: "Mie Goreng",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				nama_kategori: "Mie Kuah",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Kategoris", null, {});
	},
};

