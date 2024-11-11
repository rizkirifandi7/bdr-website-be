"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Item_Pesanans", [
			{
				id_pesanan: 1,
				id_menu: 1,
				jumlah: 1,
				subtotal: 20000,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Item_Pesanans", null, {});
	},
};

