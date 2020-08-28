const { Router } = require("express");
const UserController = require("../../app/controllers/UserController");
const AuthController = require("../../app/controllers/AuthController");
const auth = require("../../config/passport")();

const routes = Router();

routes.get("/", auth.authenticate("jwt"), UserController.index);
routes.get("/:id", UserController.show);
routes.post("/", UserController.store);
routes.put("/:id", UserController.update);
routes.delete("/:id", UserController.destroy);

module.exports = routes;
