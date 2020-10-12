const { Router } = require("express");
const UserController = require("../../app/controllers/UserController");
const AuthController = require("../../app/controllers/AuthController");
const auth = require("../../config/passport")();

const routes = Router();

routes.get("/", UserController.index);
routes.get("/:id", UserController.show);
routes.post("/", UserController.store);
routes.put("/:id", UserController.update);
routes.delete("/:id", UserController.destroy);
routes.post("/:id/roles/:roleId", UserController.associateUserToRole);

module.exports = routes;
