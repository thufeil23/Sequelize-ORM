'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const Destination_data = [
      {
        name: "Bandung",
        price: 50000,
      },
      {
        name: "Jakarta",
        price: 50000,
      },
      {
        name: "Malang",
        price: 150000,
      },
    ];
    await queryInterface.bulkInsert('destinations',Destination_data);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
