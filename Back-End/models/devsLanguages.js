module.exports = (sequelize, _DataTypes) => {
  const DevsLanguages = sequelize.define('DevsLanguages', {}, { timestamps: false });
  DevsLanguages.associate = (models) => {
    models.Devs.belongsToMany(models.Languages, {
      as: 'devLanguages',
      through: DevsLanguages,
      foreignKey: 'devId',
      otherKey: 'langId',
    });
    models.Languages.belongsToMany(models.Devs, {
      as: 'languagesDev',
      through: DevsLanguages,
      foreignKey: 'langId',
      otherKey: 'devId',
    });
  };
  return DevsLanguages;
};