"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("User", [
      {
        name: "Vitor",
        phone: "71991008244",
        email: "example@example.com",
        username: "vitakus",
        password: "123456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User", null, {});
  },
};
