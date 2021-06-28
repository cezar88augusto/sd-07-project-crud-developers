module.exports = (sequelize, _DataTypes) => {
  const DevsLanguages = sequelize.define('DevsLanguages', {}, { timestamps: false });
  
  DevsLanguages.associate = (models) => {
    models.Languages.belongsToMany(models.Devs, {
      as: 'languagesDev',
      through: DevsLanguages,
      foreignKey: 'devId',
      otherKey: 'languageId',
    });
    models.Devs.belongsToMany(models.Languages, {
      as: 'devLanguages',
      through: DevsLanguages,
      foreignKey: 'languageId',
      otherKey: 'devId',
    });
  };
  return DevsLanguages;
};