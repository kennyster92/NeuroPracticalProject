'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Patient.hasOne(models.Studies, { foreignKey: 'patientId', as: 'study' });
      Patient.hasMany(models.Files, { foreignKey: 'patientId', as: 'files' });
      Patient.hasMany(models.Series, { foreignKey: 'patientId', as: 'series' });
    }
  }
  Patient.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};