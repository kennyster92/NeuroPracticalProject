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
      // define association here
      Patient.hasMany(models.Files, { foreignKey: 'idPatient', as: 'files' });
      Patient.hasMany(models.Series, { foreignKey: 'idPatient', as: 'series' });
    }
  }
  Patient.init({
    idPatient: DataTypes.INTEGER,
    name: DataTypes.STRING,
    createdDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};