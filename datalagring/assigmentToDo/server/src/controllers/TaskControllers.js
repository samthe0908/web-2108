import Logger from "../utils/Logge.js";
import StatusCode from "../utils/StatusCode.js";

const createTask = (reg, res) => {
    try{

    } catch (error){
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error XXX user'
        })
    }
}

const showTasks = (reg, res) => {
    try{

    } catch (error){
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error XXX user'
        })
    }
}



const getTaskById = (reg, res) => {
    try{

    } catch (error){
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error XXX user'
        })
    }
}

const getTaskByName = (reg, res) => {
    try{

    } catch (error){
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error XXX user'
        })
    }
}

const updateTaskById = (reg, res) => {
    try{

    } catch (error){
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error XXX user'
        })
    }
}

const deleteTaskById = (reg, res) => {
    try{

    } catch (error){
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error XXX user'
        })
    }
}

const updateDone = (reg, res) => {
    try{

    } catch (error){
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error XXX user'
        })
    }
}


export default {
    createTask,
    showTasks,
    getTaskById,
    getTaskByName,
    updateTaskById,
    deleteTaskById,
    updateDone
}