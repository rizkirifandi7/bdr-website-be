"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Menus", [{}]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Menus", null, {});
	},
};

