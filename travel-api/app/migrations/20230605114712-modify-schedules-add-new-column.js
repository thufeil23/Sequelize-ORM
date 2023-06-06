'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Schedules', 'day', {
      type: Sequelize.ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'),
      allowNull: false,
      after: 'time',
    });

    await queryInterface.changeColumn('Schedules', 'time', {
      type: Sequelize.ENUM('10:00', '12:00', '15:00', '20:00'),
      allowNull: false,
      after: 'vehcId',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Schedules', 'day');
  }
};
