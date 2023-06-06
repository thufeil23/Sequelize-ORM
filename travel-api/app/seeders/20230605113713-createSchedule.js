'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const Schedules_data = [
      {
        destId: 1,
        vehcId: 2,
        time: "10:00",
        day: "Monday",
      },
      {
        destId: 2,
        vehcId: 2,
        time: "12:00",
        day: "Monday",
      },
      {
        destId: 3,
        vehcId: 2,
        time: "15:00",
        day: "Monday",
      },
      {
        destId: 3,
        vehcId: 2,
        time: "20:00",
        day: "Monday",
      },
      {
        destId: 1,
        vehcId: 3,
        time: "15:00",
        day: "Monday",
      },
      {
        destId: 1,
        vehcId: 3,
        time: "15:00",
        day: "Tuesday",
      },
      {
        destId: 3,
        vehcId: 4,
        time: "20:00",
        day: "Tuesday",
      },
    ];
    await queryInterface.bulkInsert('Schedules',Schedules_data);
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
