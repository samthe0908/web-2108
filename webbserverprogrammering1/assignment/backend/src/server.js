import express from 'express'
import Configurations from "./configuration/Configuration.js"
import ApplyMiddlewares from "./configuration/ApplyMiddlewares.js";
import AliveRoute from "./routes/AliveRoute.js";
import TaskRoutes from "./routes/TaskRoutes.js";

const app = express()
ApplyMiddlewares(app)

AliveRoute.routes(app)
TaskRoutes.routes(app)

Configurations.connectToPort(app)


