'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const vehicles_data = [
    {
      name: "H1",
      capacity: 12,
      price: 250000,
    },
    {
      name: "Hiace",
      capacity: 16,
      price: 230000,
    },
    {
      name: "Elf",
      capacity: 10,
      price: 200000,
    },
    {
      name: "APV",
      capacity: 6,
      price: 140000,
    },
    {
      name: "Bus",
      capacity: 50,
      price: 350000,
    }
    ];
    await queryInterface.bulkInsert('vehicles',vehicles_data);
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
