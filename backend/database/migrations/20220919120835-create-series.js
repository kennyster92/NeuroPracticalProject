'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Series', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seriesName: {
        type: Sequelize.STRING
      },
      patientId: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName:'Patients',
          },
          key: 'id',
        }
      },
      studyId: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName:'Studies',
          },
          key: 'id',
        }
      },
      modalityId: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName:'Modalities',
          },
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Series');
  }
};