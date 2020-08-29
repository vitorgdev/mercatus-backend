"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Action extends Model {
    static associate(models) {
      // this.belongsTo(models.ProfileFeatureAction);
    }
  }
  Action.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Action",
      freezeTableName: true,
      underscored: false,
    }
  );
  return Action;
};
