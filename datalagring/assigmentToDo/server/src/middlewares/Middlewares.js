import dotenv from "dotenv";
import StatusCode from "../utils/StatusCode.js";

dotenv.config()

const notFound = (req, res, next) => {
    const error = new Error(`Not found ${req.originalUrl}`)
    res.status(StatusCode.NOT_FOUND)
    next(error)
}
const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === StatusCode.OK ? StatusCode.INTERNAL_SERVER_ERROR : res.statusCode
    res.status(statusCode)
    res.json({
        statusCode: statusCode,
        message: error.message,
        stacktrace: process.env.NODE_ENV === 'PRODUCTION' ? 'lol' : error.stack,
    })
    next()
}


export default {
    notFound,
    errorHandler
}
