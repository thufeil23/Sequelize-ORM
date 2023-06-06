'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Bookings', 'totalPrice', {
      allowNull: false,
      type: Sequelize.STRING,
      after: 'scheId',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Bookings', 'totalPrice');
  }
};
