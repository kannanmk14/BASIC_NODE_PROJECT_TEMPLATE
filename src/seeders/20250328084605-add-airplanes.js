'use strict';

/** @type {import('sequelize-cli').Migration} */
const { Op } = require('sequelize');
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
    await queryInterface.bulkInsert('Airplanes', [{
         modelNumber: 'boeing777',
         capacity:10,
         createdAt:new Date(),
         updatedAt:new Date()
       },{
        modelNumber: 'airbus348',
        capacity:200,
        createdAt:new Date(),
        updatedAt:new Date()
       }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     //if we just send {} all of the entry from Airplanes will be gone
    await queryInterface.bulkDelete('Airplanes', {[Op.or]:[{modelNumber:'boeing777'},{modelNumber:'airbus348'}]});
   
  }
};
