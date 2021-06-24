
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const DevsLanguagesTable = await queryInterface.createTable('DevsLanguages', {
      devId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Devs',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
      },
      languageId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Languages',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
      },
    });
    return DevsLanguagesTable;
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('DevsLanguages');
  },
};
