"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Menus", [
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Cincang Tetlan",
        harga: 25000,
        deskripsi: "Mie Bakso Cincang Tetlan",
        gambar: "mie_bakso_cincang_tetlan.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Cincang",
        harga: 25000,
        deskripsi: "Mie Bakso Cincang",
        gambar: "mie_bakso_cincang.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Halus",
        harga: 22000,
        deskripsi: "Mie Bakso Halus",
        gambar: "mie_bakso_halus.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Telur Iga",
        harga: 30000,
        deskripsi: "Mie Bakso Telur Iga",
        gambar: "mie_bakso_telur_iga.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Telur",
        harga: 25000,
        deskripsi: "Mie Bakso Telur",
        gambar: "mie_bakso_telur.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Urat Iga",
        harga: 25000,
        deskripsi: "Mie Bakso Urat Iga",
        gambar: "mie_bakso_urat_iga.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Urat Iga",
        harga: 30000,
        deskripsi: "Mie Bakso Urat Iga",
        gambar: "mie_bakso_urat_iga.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Urat Tetlan",
        harga: 25000,
        deskripsi: "Mie Bakso Urat Tetlan",
        gambar: "mie_bakso_urat_tetelan.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 1,
        nama_menu: "Mie Bakso Urat",
        harga: 25000,
        deskripsi: "Mie Bakso Urat",
        gambar: "mie_bakso_urat.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 5,
        nama_menu: "Jus Alpukat",
        harga: 25000,
        deskripsi: "Jus Alpukat",
        gambar: "alpukat.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 5,
        nama_menu: "Bubblegum",
        harga: 25000,
        deskripsi: "Bubblegum",
        gambar: "bubblegum.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 5,
        nama_menu: "Es Jeruk",
        harga: 25000,
        deskripsi: "Es Jeruk",
        gambar: "esjeruk.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 5,
        nama_menu: "Jus Mangga",
        harga: 25000,
        deskripsi: "Jus Mangga",
        gambar: "mangga.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 5,
        nama_menu: "Melon Orange Squash",
        harga: 25000,
        deskripsi: "Melon Orange Squash",
        gambar: "melon_orange_squash.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
        id_kategori: 5,
        nama_menu: "Ocean Blue",
        harga: 25000,
        deskripsi: "Ocean Blue",
        gambar: "ocean_blue.png",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Menus", null, {});
	},
};

