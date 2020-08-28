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
      // define association here
    }
  };
  ProfileFeatureAction.init({
    profile_id: DataTypes.INTEGER,
    action_id: DataTypes.INTEGER,
    feature_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProfileFeatureAction',
    freezeTableName: true,
    underscored: false
  });
  return ProfileFeatureAction;
};