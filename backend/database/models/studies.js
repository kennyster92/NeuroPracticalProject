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
      // define association here
      Studies.hasMany(models.Files, { foreignKey: 'idStudy', as: 'files' });
      Studies.hasMany(models.Series, { foreignKey: 'idStudy', as: 'series' });
    }
  }
  Studies.init({
    idPatient: DataTypes.INTEGER,
    idStudy: DataTypes.INTEGER,
    studyName: DataTypes.STRING,
    createdDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Studies',
  });
  return Studies;
};