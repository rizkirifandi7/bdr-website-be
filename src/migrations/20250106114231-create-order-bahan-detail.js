"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Order_Bahan_Details", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			id_order_bahan: {
				type: Sequelize.INTEGER,
			},
			id_bahan_baku: {
				type: Sequelize.INTEGER,
			},
			jumlah: {
				type: Sequelize.INTEGER,
			},
			harga: {
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Order_Bahan_Details");
	},
};
