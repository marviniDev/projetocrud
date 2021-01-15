'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Users', [{
       name: 'John Doe',
       password: '123',
       email: 'exemplo@exemplo.com',
       createdAt: new Date,
       updatedAt: new Date
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
  }
};
