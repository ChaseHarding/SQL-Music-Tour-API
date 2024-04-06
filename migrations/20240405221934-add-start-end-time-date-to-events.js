'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.addColumn('events', 'date', {
        type: Sequelize.DATE,
        allownull: false
      }),
      queryInterface.addColumn('events', 'available_start_time', {
        type: Sequelize.DATE,
        allownull: false
      }),
      queryInterface.addColumn('events', 'end_time', {
        type: Sequelize.DATE,
        allownull: false
      })
    ])
  },

  async down (queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.removeColumn('events', 'date'),
      queryInterface.removeColumn('available_start_time'),
      queryInterface.removeColumn('events', 'end_time'),
    ]);
  }
};
