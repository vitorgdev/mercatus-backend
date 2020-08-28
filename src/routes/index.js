const { Router } = require("express");
const UserController = require("../app/controllers/UserController");
const AuthController = require("../app/controllers/AuthController");
const auth = require("../config/passport")();

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({
    apiName: "Mercatus",
    serviceVersion: "v1",
  });
});

routes.use("/users", require("./modules/users"));
routes.use("/profiles", require("./modules/profiles"));
routes.use("/auth", require("./modules/auth"));

module.exports = routes;
