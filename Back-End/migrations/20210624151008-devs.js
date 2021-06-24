
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const DevsTable = await queryInterface.createTable("Devs", {
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
      landLine: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      mobileLine: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      district: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
    return DevsTable;
  },

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable("Devs"),
};
