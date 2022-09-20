const { Op } = require("sequelize");

const { Studies } = require('../../database/models');

module.exports = {
  Query: {
    async getAllStudies(root, args, context) {
      return Studies.findAll();
    },
    async countStudies(_, {startDate, endDate}) {
      return Studies.count({ 
        where: {
          createdAt: {
            [Op.lt]: endDate,
            [Op.gt]: startDate
          }
        }
      });
    }
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