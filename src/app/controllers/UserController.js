const { User } = require("../models");
const UserService = require("../services/UserService");

class UserController {
  async index(req, res, next) {
    try {
      const users = await new UserService(User).index();
      return res.json(users);
    } catch (err) {
      next(err);
    }
  }

  async show(req, res, next) {
    try {
      const user = await new UserService(User).show(req.params.id);
      return res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async store(req, res, next) {
    try {
      const user = await new UserService(User).store(req.body);
      return res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const user = await new UserService(User).update(req.params.id, req.body);
      return res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async destroy(req, res, next) {
    try {
      await new UserService(User).destroy(req.params.id, req.body);
      return res.status(204).json();
    } catch (err) {
      next(err);
    }
  }

  async associateUserToRole(req, res, next) {
    try {
      const user = await new UserService(User).associateUserToRole(
        req.params.id,
        req.params.roleId
      );
      return res.json(user);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();
