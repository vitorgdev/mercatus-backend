"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Action", [
      {
        name: "index",
        description: "Get all items",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "store",
        description: "Store item",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "update",
        description: "Update item",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "delete",
        description: "Delete item",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Action", null, {});
  },
};
