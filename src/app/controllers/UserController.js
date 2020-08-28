const { User } = require("../models");

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (err) {
      next(err)
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      return res.json(user);
    } catch (err) {
      next(err)
    }
  }

  async store(req, res, next) {
    try {
      const user = await User.create(req.body);

      return res.json(user);
    } catch (err) {
      next(err)
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      await user.update(req.body);

      return res.json({ user });
    } catch (err) {
      next(err)
    }
  }

  async destroy(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      await user.destroy();

      return res.json();
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new UserController();
