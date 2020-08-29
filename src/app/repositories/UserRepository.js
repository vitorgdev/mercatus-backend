const {
  Profile,
  ProfileFeatureAction,
  Action,
  Feature,
  User,
} = require("../models");
class UserRepository {
  constructor() {
    this.model = User;
  }
  async findAllWithProfileFeatureAction() {
    const users = await this.model.findAll({
      include: [
        {
          model: Profile,
          include: [
            {
              model: ProfileFeatureAction,
              include: [Action, Feature],
            },
          ],
        },
      ],
    });
    return users;
  }
}

module.exports = UserRepository;
