const { Studies } = require('../../database/models');

const { AuthenticationError } = require('apollo-server-express');

module.exports = {
  Query: {
    async getAllStudies(root, args, context) {
      return Studies.findAll();
    },
  },

  Studies: {
    series(study) {
      return study.getSeries();
    },

    files(study) {
      return study.getFiles();
    },

    patient(study) {
      return study.getPatient();
    }
  },
};