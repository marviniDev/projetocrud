'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Profiles', [{
       id_user: 2,
       fullname: 'Marcos Vinicius',
       birthday: new Date,
       genre: 'masculino',
       createdAt: new Date,
       updatedAt: new Date
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Profiles', null, {});
  }
};
