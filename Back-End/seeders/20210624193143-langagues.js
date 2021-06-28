module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Languages',
      [
        {
          id: 1,
          name: 'JAVA',
        },
        {
          id: 2,
          name: 'PYTHON',
        },
        {
          id: 3,
          name: 'JAVASCRIPT',
        },
        {
          id: 4,
          name: 'GOLANG',
        },
        {
          id: 5,
          name: 'CSHARP',
        },
        {
          id: 6,
          name: 'ELIXIR',
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Languages', null, {});
  },
};
