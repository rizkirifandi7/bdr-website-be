"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Kategoris", [
			{
				id_user: 1,
				nama_kategori: "Mie Bakso",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 1,
				nama_kategori: "Mie Yamin",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 1,
				nama_kategori: "Mie Yamientiaw",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 1,
				nama_kategori: "Mie Ayam",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 1,
				nama_kategori: "Minuman",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 2,
				nama_kategori: "Mie Bakso",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 2,
				nama_kategori: "Mie Yamin",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 2,
				nama_kategori: "Mie Yamientiaw",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 2,
				nama_kategori: "Mie Ayam",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 2,
				nama_kategori: "Minuman",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 3,
				nama_kategori: "Mie Bakso",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 3,
				nama_kategori: "Mie Yamin",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 3,
				nama_kategori: "Mie Yamientiaw",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 3,
				nama_kategori: "Mie Ayam",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 3,
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

