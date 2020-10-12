const Service = require("./Service");
const UserRepository = require("../repositories/UserRepository");
const { Profile, ProfileFeatureAction, Action, Feature } = require("../models");

class UserService extends Service {
  async index() {
    const users = new UserRepository().findAllWithProfileFeatureAction();
    return users;
  }

  async associateUserToRole(id, roleId) {
    const userCreated = new UserRepository().associateUserToRole(id, roleId);
    return userCreated;
  }
}

module.exports = UserService;
