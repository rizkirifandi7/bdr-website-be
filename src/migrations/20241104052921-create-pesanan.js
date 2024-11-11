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
				id_meja: {
					type: Sequelize.INTEGER,
				},
				order_time: {
					type: Sequelize.DATE,
				},
				status: {
					type: Sequelize.ENUM("pending", "completed", "canceled"),
				},
				mode: {
					type: Sequelize.ENUM("Dine In", "Pick Up", "Delivery"),
				},
				total: {
					type: Sequelize.BIGINT,
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

