'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfileFeatureAction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Action, { foreignKey: 'id' })
      this.hasOne(models.Feature, { foreignKey: 'id' })
    }
  };
  ProfileFeatureAction.init({
    profileId: DataTypes.INTEGER,
    actionId: DataTypes.INTEGER,
    featureId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProfileFeatureAction',
    freezeTableName: true,
    underscored: false
  });
  return ProfileFeatureAction;
};