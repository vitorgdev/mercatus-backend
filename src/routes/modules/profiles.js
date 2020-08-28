const { Router } = require("express");
const ProfileController = require("../../app/controllers/ProfileController");

const routes = Router();

routes.get("/", ProfileController.index);
routes.get("/:id", ProfileController.show);
routes.post("/", ProfileController.store);
routes.put("/:id", ProfileController.update);
routes.delete("/:id", ProfileController.destroy);

module.exports = routes;
