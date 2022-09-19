module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Series', [{
        id: 1,
        seriesName: 'Serie1',
        patientId: 2,
        studyId: 2,
        modalityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        seriesName: 'Serie2',
        patientId: 3,
        studyId: 1,
        modalityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        seriesName: 'Serie3',
        patientId: 4,
        studyId: 3,
        modalityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        seriesName: 'Serie4',
        patientId: 1,
        studyId: 4,
        modalityId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Series', null, {});
    }
  };