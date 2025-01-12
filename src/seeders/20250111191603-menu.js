"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Menus", [
			{
				id_user: 1,
				id_kategori: 1,
				nama_menu: "Mie Bakso Cincang",
				harga: 20000,
				deskripsi: "Mie Bakso Cincang adalah mie bakso yang terbuat dari daging cincang",
				gambar:
					"https://res.cloudinary.com/db6z9zmpu/image/upload/v1736623347/logobdr.png",
				ispopuler: "populer",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 1,
				id_kategori: 1,
				nama_menu: "Mie Bakso Urat",
				harga: 20000,
				deskripsi: "Mie Bakso Urat adalah mie bakso yang terbuat dari daging urat",
				gambar:
					"https://res.cloudinary.com/db6z9zmpu/image/upload/v1736623347/logobdr.png",
				ispopuler: "populer",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 2,
				id_kategori: 1,
				nama_menu: "Mie Bakso Cincang",
				harga: 20000,
				deskripsi: "Mie Bakso Cincang adalah mie bakso yang terbuat dari daging cincang",
				gambar:
					"https://res.cloudinary.com/db6z9zmpu/image/upload/v1736623347/logobdr.png",
				ispopuler: "populer",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 2,
				id_kategori: 1,
				nama_menu: "Mie Bakso Urat",
				harga: 20000,
				deskripsi: "Mie Bakso Urat adalah mie bakso yang terbuat dari daging urat",
				gambar:
					"https://res.cloudinary.com/db6z9zmpu/image/upload/v1736623347/logobdr.png",
				ispopuler: "populer",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 3,
				id_kategori: 1,
				nama_menu: "Mie Bakso Cincang",
				harga: 20000,
				deskripsi: "Mie Bakso Cincang adalah mie bakso yang terbuat dari daging cincang",
				gambar:
					"https://res.cloudinary.com/db6z9zmpu/image/upload/v1736623347/logobdr.png",
				ispopuler: "populer",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 3,
				id_kategori: 1,
				nama_menu: "Mie Bakso Urat",
				harga: 20000,
				deskripsi: "Mie Bakso Urat adalah mie bakso yang terbuat dari daging urat",
				gambar:
					"https://res.cloudinary.com/db6z9zmpu/image/upload/v1736623347/logobdr.png",
				ispopuler: "populer",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Menus", null, {});
	},
};

