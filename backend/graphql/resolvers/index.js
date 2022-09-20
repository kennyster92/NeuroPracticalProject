const patientResolvers = require('./patient');
const studiesResolvers = require('./studies');
const modalityResolvers = require('./modality');

module.exports = [patientResolvers, studiesResolvers, modalityResolvers];