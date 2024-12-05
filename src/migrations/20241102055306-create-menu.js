"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			"Menus",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				id_kategori: {
					type: Sequelize.INTEGER,
				},
				nama_menu: {
					type: Sequelize.STRING,
				},
				harga: {
					type: Sequelize.INTEGER,
				},
				deskripsi: {
					type: Sequelize.TEXT,
				},
				gambar: {
					type: Sequelize.STRING,
				},
				ispopuler: {
					type: Sequelize.ENUM("populer", "tidak populer"),
				},
				createdAt: {
					allowNull: false,
					type: Sequelize.DATE,
				},
				updatedAt: {
					allowNull: false,
					type: Sequelize.DATE,
				},
				deletedAt: {
					allowNull: true,
					type: Sequelize.DATE,
				},
			},
			{
				pararanoid: true,
			}
		);
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Menus");
	},
};
