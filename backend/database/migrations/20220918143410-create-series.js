'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Series', {
      idSeries: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPatient: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Patient',
          },
          key: 'idPatient',
        }
      },
      idStudy: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Studies',
          },
          key: 'idStudy',
        }
      },
      idModality: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Modality',
          },
          key: 'idModality',
        }
      },
      seriesName: {
        type: Sequelize.STRING
      },
      createdDate: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Series');
  }
};