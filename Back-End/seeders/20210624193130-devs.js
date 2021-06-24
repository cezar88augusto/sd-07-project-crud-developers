module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Devs',
      [{
        id: 1,
        name: 'Cézar Moreira',
        landLine: 'cezar88augusto@gmail.com',
        mobileLine: '31 9 9801-9999',
        address: 'Rua A 111 - Bairro: AB - Cidade: Belo Horizonte - UF: MG',
      },
      {
        id: 2,
        name: 'Luísa S',
        landLine: 'luisa@gmail.com',
        mobileLine: '31 9 9999-9999',
        address: 'Rua B 222 - Bairro: CD - Cidade: Belo Horizonte - UF: MG',
      },
      {
        id: 3,
        name: 'Mel',
        landLine: 'mel@gmail.com',
        mobileLine: '31 9 8888-888',
        address: 'Rua C 333 - Bairro: EF - Cidade: Belo Horizonte - UF: MG',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Devs', null, {});
  },
};
