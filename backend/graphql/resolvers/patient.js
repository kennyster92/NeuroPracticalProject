const { Patient } = require('../../database/models');

const { AuthenticationError } = require('apollo-server-express');

module.exports = {
  Query: {
    async getAllPatients(root, args, context) {
      return Patient.findAll();
    },
  },

  Patient: {
    series(patient) {
      return patient.getSeries();
    },

    files(patient) {
      return patient.getFiles();
    },
  },
};