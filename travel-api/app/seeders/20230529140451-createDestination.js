'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const Destination_data = [
      {
        id: 1,
        name: "Bandung",
        price: 50000,
      },
      {
        id: 2,
        name: "Jakarta",
        price: 50000,
      },
      {
        id: 3,
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
