
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const LanguagesTable = await queryInterface.createTable("Languages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
    return LanguagesTable;
  },

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable("Languages"),
};
