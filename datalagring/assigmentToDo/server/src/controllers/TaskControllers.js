import Logger from "../utils/Logger.js";
import StatusCode from "../utils/StatusCode.js";
import TaskModel from "../models/TaskModel.js";

const createTask = async (req, res) => {
    Logger.info('createrUser()')
    Logger.http(req.body)
    const {name, task } = req.body
    if (name && task ) {
        const newObject = {
            name: name,
            task: task,

        }
        Logger.debug(newObject)
        try {
            const tasks = new TaskModel(newObject)
            const response = await tasks.save()
            Logger.debug(response)
            res.status(StatusCode.CREATED).send(response)
        } catch (error) {
            Logger.error(error)
            res.status(StatusCode.BAD_REQUEST).send({
                error: 'Error Creating Task'
            })
        }
    }else {
        Logger.error('name and todo failed')
        res.status(StatusCode.NO_CONTENT).send('No body')
    }
}

const showTasks = (req, res) => {
    try {
        TaskModel.find({}, (error, tasks) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting tasks'
                })
            } else {
                Logger.info(tasks)
                res.status(StatusCode.OK).send(tasks)
            }
        })
    } catch (error) {
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting tasks'
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