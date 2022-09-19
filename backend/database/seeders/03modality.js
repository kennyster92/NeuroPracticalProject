module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Modalities', [{
        id: 1,
        name: 'Modality1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Modality2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Modality3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Modality4',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Modalities', null, {});
    }
  };