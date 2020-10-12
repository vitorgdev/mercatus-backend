const { User } = require("../models");
const UserService = require("../services/UserService");
const jwt = require("jsonwebtoken");
const cfg = require("../../config/jwt");

class AuthController {
  async checkToken(req, res) {
    try {
      var token = req.headers.authorization.split(" ")[1];
      var idUser = jwt.verify(token, cfg.jwtSecret);
      if (idUser) {
        const user = await new UserService(User).show(idUser.id);
        return res.json(user);
      } else {
        return res.status(401).json({ error: "Invalid Token" });
      }
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }
  async login(req, res) {
    try {
      if (req.body.username && req.body.password) {
        var username = req.body.username;
        var password = req.body.password;
        var user = await User.findAll({
          raw: true,
          where: {
            username: username,
            password: password,
          },
        });
        if (user[0]) {
          var payload = { id: user[0].id };
          var token = jwt.sign(payload, cfg.jwtSecret, { expiresIn: "1h" });
          res.json({ token: token, user: user[0] });
        } else {
          res.sendStatus(401);
        }
      } else {
        res.sendStatus(401);
      }
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new AuthController();
