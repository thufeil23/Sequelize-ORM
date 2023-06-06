'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const roles_data = [
      {
        id: 1,
        name: "USER",
      },
      {
        id: 2,
        name: "ADMIN",
      },
    ];
    await queryInterface.bulkInsert('roles',roles_data);
  },

  async down (queryInterface, Sequelize) {
  }
};
