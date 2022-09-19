module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Files', [{
        id: 1,
        filePath: 'C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin\\img01.png',
        patientId: 1,
        studyId: 4,
        seriesId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        filePath: 'C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin\\img03.png',
        patientId: 3,
        studyId: 3,
        seriesId: 4,        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        filePath: 'C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin\\img11.png',
        patientId: 2,
        studyId: 2,
        seriesId: 3,        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        filePath: 'C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin\\img22.png',
        patientId: 4,
        studyId: 1,
        seriesId: 2,        
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Files', null, {});
    }
  };