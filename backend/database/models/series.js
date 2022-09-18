'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Series.belongsTo(models.Patient, { foreignKey: 'idPatient', as: 'patient' });
      Series.belongsTo(models.Studies, { foreignKey: 'idStudies', as: 'studies' });
      Series.hasMany(models.Files, { foreignKey: 'idSeries', as: 'files' });
      Series.hasMany(models.Modality, { foreignKey: 'idSeries', as: 'modalities' });
    }
  }
  Series.init({
    idPatient: DataTypes.INTEGER,
    idStudy: DataTypes.INTEGER,
    idSeries: DataTypes.INTEGER,
    idModality: DataTypes.INTEGER,
    seriesName: DataTypes.STRING,
    createdDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Series',
  });
  return Series;
};