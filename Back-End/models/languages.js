module.exports = (sequelize, DataTypes) => {
  const Languages = sequelize.define('Languages', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
    { timestamps: false });

  Languages.associate = (models) => {
    Languages.hasMany(models.Devs,
      { foreignKey: 'id', as: 'devs' });
  };
  return Languages;
};
