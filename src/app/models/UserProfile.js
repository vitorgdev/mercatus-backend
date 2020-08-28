"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Profile, { foreignKey: "profileId" });
    }
  }
  UserProfile.init(
    {
      userId: DataTypes.INTEGER,
      profileId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserProfile",
      freezeTableName: true,
      underscored: false,
    }
  );
  return UserProfile;
};
