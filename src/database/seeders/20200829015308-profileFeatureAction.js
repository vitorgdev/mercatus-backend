"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("ProfileFeatureAction", [
      {
        profileId: 1,
        actionId: 1,
        featureId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        profileId: 1,
        actionId: 4,
        featureId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        profileId: 1,
        actionId: 3,
        featureId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ProfileFeatureAction", null, {});
  },
};
