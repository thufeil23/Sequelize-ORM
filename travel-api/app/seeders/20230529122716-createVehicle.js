'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const Vehicle_data = [
    {
      id: 1,
      name: "H-1",
      capacity: "12",
      price: ""
    },
    {
      id: 2,
      name: "Hiace",
      capacity: "16",
      price: ""
    },
    {
      id: 3,
      name: "Elf",
      capacity: "10",
      price: ""
    },
    
   ]
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
