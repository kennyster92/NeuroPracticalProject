'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Studies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Studies.hasMany(models.Files, { foreignKey: 'studyId', as: 'files' });
      Studies.hasMany(models.Series, { foreignKey: 'studyId', as: 'series' });
      Studies.belongsTo(models.Patient, { foreignKey: 'patientId', as: 'patient' });    }
  }
  Studies.init({
    studyName: DataTypes.STRING,
    patientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Studies',
  });
  return Studies;
};