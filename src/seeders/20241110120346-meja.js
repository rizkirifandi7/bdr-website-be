'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mejas', [
      {
        nomor_meja: 1,
        qr_url: 'https://example.com/1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomor_meja: 2,
        qr_url: 'https://example.com/2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomor_meja: 3,
        qr_url: 'https://example.com/3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomor_meja: 4,
        qr_url: 'https://example.com/4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomor_meja: 5,
        qr_url: 'https://example.com/5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mejas', null, {});
  },
};
