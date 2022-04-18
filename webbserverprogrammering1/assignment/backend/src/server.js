import express from 'express'
import Configuration from './configuration/configarations.js'
import ApplyMiddlewares from "./configuration/ApplyMiddlewares.js";
import AliveRoute from './routes/AliveRoute.js'

const app = express()
ApplyMiddlewares(app)

AliveRoute.routes(app)



Configuration.connectToPort(app)
