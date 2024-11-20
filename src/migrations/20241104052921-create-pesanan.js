"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			"Pesanans",
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
				id_meja: {
					type: Sequelize.INTEGER,
				},
				code_payment: {
					type: Sequelize.STRING,
				},
				order_time: {
					type: Sequelize.DATE,
				},
				status: {
					type: Sequelize.ENUM("pending", "preparing", "completed", "canceled"),
				},
				mode: {
					type: Sequelize.ENUM("Dine In", "Take Away", "Delivery"),
				},
				total: {
					type: Sequelize.BIGINT,
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
		await queryInterface.dropTable("Pesanans");
	},
};

