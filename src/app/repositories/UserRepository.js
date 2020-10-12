const {
  Profile,
  ProfileFeatureAction,
  Action,
  Feature,
  User,
  UserProfile,
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
  async associateUserToRole(id, roleId) {
    const user = await User.findByPk(id);
    const role = await Profile.findByPk(roleId);
    const userProfile = await UserProfile.create({
      userId: id,
      profileId: roleId,
    });
    console.log(userProfile);
    return userProfile;
  }
}

module.exports = UserRepository;
