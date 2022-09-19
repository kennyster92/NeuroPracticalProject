module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Studies', [{
        id: 1,
        studyName: 'Study1',
        patientId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        studyName: 'Study2',
        patientId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        studyName: 'Study3',
        patientId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        studyName: 'Study4',
        patientId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Studies', null, {});
    }
  };