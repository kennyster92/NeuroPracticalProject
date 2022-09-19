'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Files extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Files.belongsTo(models.Series, { foreignKey: 'seriesId', as: 'series' });
      Files.belongsTo(models.Patient, { foreignKey: 'patientId', as: 'patient' });
    }
  }
  Files.init({
    filePath: DataTypes.STRING,
    patientId: DataTypes.INTEGER,
    studyId: DataTypes.INTEGER,
    seriesId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Files',
  });
  return Files;
};