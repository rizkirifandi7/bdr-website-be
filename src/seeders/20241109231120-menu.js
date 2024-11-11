"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Menus", [
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Cincang Iga",
        harga: "20000",
        deskripsi: "Mie Bakso Cincang Iga",
        gambar: "mie_bakso_cincang_iga.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Cincang Tetlan",
        harga: "20000",
        deskripsi: "Mie Bakso Cincang Tetlan",
        gambar: "mie_bakso_cincang_tetlan.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Cincang",
        harga: "20000",
        deskripsi: "Mie Bakso Cincang",
        gambar: "mie_bakso_cincang.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Halus",
        harga: "20000",
        deskripsi: "Mie Bakso Halus",
        gambar: "mie_bakso_halus.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Telur Iga",
        harga: "20000",
        deskripsi: "Mie Bakso Telur Iga",
        gambar: "mie_bakso_telur_iga.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Telur",
        harga: "20000",
        deskripsi: "Mie Bakso Telur",
        gambar: "mie_bakso_telur.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Urat Iga",
        harga: "20000",
        deskripsi: "Mie Bakso Urat Iga",
        gambar: "mie_bakso_urat_iga.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Urat Iga",
        harga: "20000",
        deskripsi: "Mie Bakso Urat Iga",
        gambar: "mie_bakso_urat_iga.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Urat Tetlan",
        harga: "20000",
        deskripsi: "Mie Bakso Urat Tetlan",
        gambar: "mie_bakso_urat_tetelan.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Urat",
        harga: "20000",
        deskripsi: "Mie Bakso Urat",
        gambar: "mie_bakso_urat.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Menus", null, {});
	},
};

