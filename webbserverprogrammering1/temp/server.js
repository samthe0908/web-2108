import express from 'express'
import Configuration from '../assignment/backend/src/configuration/configarations.js'
import ApplyMiddlewares from "../assignment/backend/src/configuration/ApplyMiddlewares.js";
import AliveRoute from '../assignment/backend/src/routes/AliveRoute.js'
import todoData from "../assignment/backend/src/data";

const app = express()
ApplyMiddlewares(app)

AliveRoute.routes(app)



Configuration.connectToPort(app)
