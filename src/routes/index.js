const { Router } = require("express");
const UserController = require("../app/controllers/UserController");
const AuthController = require("../app/controllers/AuthController");
const auth = require("../config/passport")();

const routes = Router();

routes.get("/users", auth.authenticate("jwt"), UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

routes.post("/login", AuthController.login);
routes.get("/checkToken", AuthController.checkToken);

module.exports = routes;
