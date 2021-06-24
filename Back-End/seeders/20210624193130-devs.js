module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Devs',
      [{
        id: 1,
        name: 'Cézar Moreira',
        landLine: 'cezar88augusto@gmail.com',
        mobileLine: '31 9 9801-9999',
        street: 'Rua A',
        district: 'AB',
        city: 'BH',
        state: 'MG',
      },
      {
        id: 2,
        name: 'Luísa S',
        landLine: 'luisa@gmail.com',
        mobileLine: '31 9 9999-9999',
        street: 'Rua B',
        district: 'AB',
        city: 'BH',
        state: 'MG',
      },
      {
        id: 3,
        name: 'Mel',
        landLine: 'mel@gmail.com',
        mobileLine: '31 9 8888-888',
        street: 'Rua C',
        district: 'AB',
        city: 'SP',
        state: 'SP',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Devs', null, {});
  },
};
