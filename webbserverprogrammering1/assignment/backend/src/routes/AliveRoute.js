import AliveController from "../configuration/AliveController.js";

const routes = (app) => {
  app.get ('/', AliveController.alive)
}

export default {
    routes
}