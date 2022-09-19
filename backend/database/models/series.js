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
      Series.belongsTo(models.Patient, { foreignKey: 'patientId', as: 'patient' });
      Series.belongsTo(models.Studies, { foreignKey: 'studyId', as: 'studies' });
      Series.belongsTo(models.Modality, { foreignKey: 'modalityId', as: 'modalities' });    
      Series.hasMany(models.Files, { foreignKey: 'seriesId', as: 'files' });
    }
  }
  Series.init({
    seriesName: DataTypes.STRING,
    patientId: DataTypes.INTEGER,
    studyId: DataTypes.INTEGER,
    modalityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Series',
  });
  return Series;
};