module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Devs',
      [{
        id: 1,
        name: 'Cézar Moreira',
        landLine: '3 442 7777',
        mobileLine: '31 9 9801-9999',
        street: 'Rua A',
        district: 'AB',
        city: 'BH',
        state: 'MG',
        zipCode: '31630-900 '
      },
      {
        id: 2,
        name: 'Luísa S',
        landLine: '3 442 8888',
        mobileLine: '31 9 9999-9999',
        street: 'Rua B',
        district: 'AB',
        city: 'BH',
        state: 'MG',
        zipCode: '31630-900 '
      },
      {
        id: 3,
        name: 'Mel',
        landLine: '3 442 9999',
        mobileLine: '31 9 8888-888',
        street: 'Rua C',
        district: 'AB',
        city: 'SP',
        state: 'SP',
        zipCode: '01153-000'
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Devs', null, {});
  },
};
