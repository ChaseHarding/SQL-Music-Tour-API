'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('events', 'date', {
      type: Sequelize.DATE,
      allownull: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('events', 'date', {
      type: Sequelize.TEXT,
      allownull: false
    })
  }
};
