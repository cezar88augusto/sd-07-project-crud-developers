
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
        defaultValue: true,
      },
      district: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: true,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: true,
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: true,
      },
      zipCode: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: true,
      },
    });
    return DevsTable;
  },

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable("Devs"),
};
