const Service = require("./Service");
const UserRepository = require("../repositories/UserRepository");
const { Profile, ProfileFeatureAction, Action, Feature } = require("../models");

class UserService extends Service {
  async index() {
    const users = new UserRepository().findAllWithProfileFeatureAction();
    return users;
  }
}

module.exports = UserService;
