"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			"Kategoris",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				id_user: {
					type: Sequelize.INTEGER,
				},
				nama_kategori: {
					type: Sequelize.STRING,
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
		await queryInterface.dropTable("Kategoris");
	},
};

