const { Profile, User, ProfileFeatureAction } = require("../models");

class ProfileController {
  async index(req, res, next) {
    try {
      const profiles = await Profile.findAll({ include: [User, ProfileFeatureAction] });
      return res.json(profiles);
    } catch (err) {
      next(err);
    }
  }

  async show(req, res) {
    try {
      const profile = await Profile.findByPk(req.params.id);

      return res.json(profile);
    } catch (err) {
      next(err);
    }
  }

  async store(req, res, next) {
    try {
      const profile = await Profile.create(req.body);

      return res.json(profile);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res) {
    try {
      const profile = await Profile.findByPk(req.params.id);

      await profile.update(req.body);

      return res.json({ profile });
    } catch (err) {
      next(err);
    }
  }

  async destroy(req, res) {
    try {
      const profile = await Profile.findByPk(req.params.id);

      await profile.destroy();

      return res.json();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ProfileController();
