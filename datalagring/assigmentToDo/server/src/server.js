import express from "express";
import Middlewares from "./middlewares/Middlewares.js"
import Configuration from "./configurations/Configuration.js"
import ApplyMiddlewares from "./middlewares/ApplyMiddlewares.js";
import AliveRoute from "./routes/AliveRoute.js";
import TaskRoutes from "./routes/TaskRoutes.js";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config()
const app = express()

ApplyMiddlewares(app)
app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('common'))

AliveRoute.routes(app)
TaskRoutes.routes(app)


app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

Configuration.connectToPort(app)
Configuration.connectToDatabase(app)

export default app