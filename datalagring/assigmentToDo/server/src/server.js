import express from "express";
import Configuration from "./configurations/Configuration.js";
import Middlewares from "./middlewares/Middlewares.js";
import ApplyMiddlewares from "./middlewares/ApplyMiddlewares.js";

const app = express()

ApplyMiddlewares(app)


app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

Configuration.connectToPort(app)
Configuration.connectToDatabase(app)

export default app