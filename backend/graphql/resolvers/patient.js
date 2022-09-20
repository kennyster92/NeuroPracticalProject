const { Patient, Studies, Series, Files } = require('../../database/models');

module.exports = {
  Query: {
    async getAllPatients(root, args, context) {
      return Patient.findAll();
    },
  },

  Mutation: {
    async createPatient(_, {name}) {
      return Patient.create({name: name});
    },

    async updatePatient(_, {id, name}) {
      // check if patient is present
      const foundPatient = await Patient.findOne({ 
        where: {
          id
       }
      });

      if (!foundPatient) {
        throw new Error('Patient is not present in the DB');
      }

      await Patient.update({name: name}, {
        where: {
          id
        }
      });

      const editedPatient = await Patient.findOne({ 
        where: {
          id
       }
      });

      return editedPatient;
    },

    async deletePatient(_, {id}) {
      // check if patient is present
      const foundPatient = await Patient.findOne({ 
        where: {
          id
        }
      });

      if (!foundPatient) {
        throw new Error('Patient is not present in the DB');
      }

      // check if patient is connected to an other table
      const foundStudy = await Studies.findOne({
        where: {
          patientId: id
        }
      });

      const foundSerie = await Series.findOne({
        where: {
          patientId: id
        }
      });

      const foundFile = await Files.findOne({
        where: {
          patientId: id
        }
      });

      if (foundStudy || foundSerie || foundFile) {
        throw new Error('Patient is connected to other tables, first remove it from there');
      }

      await Patient.destroy({
        where: {
          id
        }
      });

      return foundPatient;
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