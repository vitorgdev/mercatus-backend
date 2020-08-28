const { Router } = require("express");
const auth = require("../../config/passport")();
const AuthController = require("../../app/controllers/AuthController");

const routes = Router();

routes.post("/login", AuthController.login);
routes.get("/checkToken", AuthController.checkToken);

module.exports = routes;
