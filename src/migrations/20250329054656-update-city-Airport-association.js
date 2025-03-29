'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addConstraint("Airports",{
      type:"FOREIGN KEY",
      fields:["cityId"],
      name:"city_fkey_constraint",
      references:{
        table:"cities",
        field:"id"
      },
      onUpdate:"CASCADE",
      onDelete:"CASCADE"


    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeConstraint("Airports","city_fkey_constraint")
  }
};
