module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Patients', [{
        id: 1,
        name: 'Kevin Ceni',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Nadir Signori',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Veronica Ceni',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Omar Bonazzi',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Patients', null, {});
    }
  };