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
      // define association here
      Files.belongsTo(models.Series, { foreignKey: 'seriesId', as: 'series' });
      Files.belongsTo(models.Patient, { foreignKey: 'patientId', as: 'patient' });
    }
  }
  Files.init({
    idPatient: DataTypes.INTEGER,
    idStudy: DataTypes.INTEGER,
    idSeries: DataTypes.INTEGER,
    idFile: DataTypes.INTEGER,
    filePath: DataTypes.STRING,
    createdDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Files',
  });
  return Files;
};