module.exports = (sequelize, DataTypes) => {
  const Devs = sequelize.define('Devs', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    landLine: DataTypes.STRING,
    mobileLine: DataTypes.STRING,
    street: DataTypes.STRING,
    district: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
  },
  {
      timestamps: false,
  });
  return Devs;
};