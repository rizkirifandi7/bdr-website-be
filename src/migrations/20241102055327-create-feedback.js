"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			"Feedbacks",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				nama: {
					type: Sequelize.STRING,
				},
				nomor_hp: {
					type: Sequelize.STRING,
				},
				kritik: {
					type: Sequelize.TEXT,
				},
				saran: {
					type: Sequelize.TEXT,
				},
				rating_menu: {
					type: Sequelize.INTEGER,
				},
				rating_pelayanan: {
					type: Sequelize.INTEGER,
				},
				rating_restoran: {
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
		await queryInterface.dropTable("Feedbacks");
	},
};

