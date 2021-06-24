module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('DevsLanguages',
      [
        {
          devId: 1,
          languageId: 1,
        },
        {
          devId: 1,
          languageId: 3,
        },
        {
          devId: 2,
          languageId: 4,
        },
        {
          devId: 2,
          languageId: 2,
        },
        {
          devId: 3,
          languageId: 6,
        },
        {
          devId: 3,
          languageId: 5,
        },

      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('DevsLanguages', null, {});
  },
};
