"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			"Reservasis",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				nama_pelanggan: {
					type: Sequelize.STRING,
				},
				kontak: {
					type: Sequelize.STRING,
				},
				tanggal_reservasi: {
					type: Sequelize.DATE,
				},
				jumlah_orang: {
					type: Sequelize.STRING,
				},
				ruangan: {
					type: Sequelize.STRING,
				},
				catatan: {
					type: Sequelize.TEXT,
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
		await queryInterface.dropTable("Reservasis");
	},
};

