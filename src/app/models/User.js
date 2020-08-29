("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsToMany(models.Profile, {
        through: models.UserProfile,
        foreignKey: "userId",
      });
      models.Profile.hasMany(models.ProfileFeatureAction);
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      username: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.DOUBLE,
        validate: {
          len: [8, 12],
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      freezeTableName: true,
      underscored: false,
    }
  );
  return User;
};
