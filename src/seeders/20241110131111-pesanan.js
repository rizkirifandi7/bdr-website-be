'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pesanans', [
      {
        id_meja: 1,
        status: 'pending',
        order_time: new Date(),
        total: 20000,
        mode: 'Dine In',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pesanans', null, {});
  },
};
