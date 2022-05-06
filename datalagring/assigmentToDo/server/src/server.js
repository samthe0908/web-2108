import express from "express";
import Configuration from "./configurations/Configuration.js";
import Middlewares from "./middlewares/Middlewares.js";
import ApplyMiddlewares from "./middlewares/ApplyMiddlewares.js";
import AliveController from "./controllers/AliveController.js";
import AliveRoute from "./routes/AliveRoute.js";

const app = express()

ApplyMiddlewares(app)

AliveRoute.routes(app)


app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

Configuration.connectToPort(app)
Configuration.connectToDatabase(app)

export default app