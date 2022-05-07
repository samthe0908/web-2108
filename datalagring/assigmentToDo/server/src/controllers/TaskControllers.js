import Logger from "../utils/Logger.js";
import StatusCode from "../utils/StatusCode.js";
import TaskModel from "../models/TaskModel.js";

const createTask = async (req, res) => {
    Logger.info('createUser()')
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

const getTaskById = (req, res) => {
    try{
        TaskModel.findById(req.params.id, (error, tasks) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting tasks'
                })
            } else {
                Logger.info(tasks)
                res.status(StatusCode.OK).send(tasks ? tasks : [{
                    message: `Task with ID '${req.params.id}' not found`
                }])
            }
        })
    } catch (error){
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting Tasks'
        })
    }
}

const getTaskByName = (req, res) => {
    try{
        TaskModel.find({name: req.params.name}, (error, tasks) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting tasks'
                })
            } else {
                Logger.info(tasks)
                res.status(StatusCode.OK).send(tasks.length > 0 ? tasks : [{
                    message: `Task with name '${req.params.name}' not found`
                }])
            }
        })
    } catch (error){
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting Tasks'
        })
    }
}

const updateTaskById = async (req, res) => {
    try {
        const updatedTask = {
            name: req.body.name,
            task: req.body.task
        }
        TaskModel.findByIdAndUpdate(req.params.id, updatedTask, {new: true}, (error, task) => {
                if (error) {
                    Logger.error(error)
                    res.status(StatusCode.BAD_REQUEST).send({
                        error: 'Error updating task with ID' + req.params.id
                    })
                } else {
                    Logger.info(task)
                    res.status(StatusCode.OK).send(task ? task : {
                        message: `Task with ID '${req.params.id}' not found`
                    })
                }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error updating task'
        })
    }
}


const deleteTaskById = (req, res) => {
    try{
        TaskModel.findByIdAndRemove(req.params.id, (error,tasks)=>{
            if (error){
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error:'Error deleting task'
                })
            }else {
                Logger.info(tasks)
                res.status(StatusCode.OK).send(
                    tasks ? `Task with ID '${req.params.id}' was deleted from databas`
                        : `Task with ID '${req.params.id}' not found`
                )
            }
        })

    } catch (error){
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error deleting task'
        })
    }
}

const updateDone = (req, res) => {
    try {
        const {id} = req.params
        const {newTaskStatus} = req.body
        const returnUpdatedObject = {
            new: true
        }
        const Query = {
            done: newTaskStatus
        }
        TaskModel.findByIdAndUpdate(id, Query, returnUpdatedObject, (error, tasks) => {
            if (error) {
                res.status(StatusCode.BAD_REQUEST).send({
                    error: `Error changing task to done`
                })
            } else {
                res.status(StatusCode.OK).send(tasks.done)
            }
        })
    } catch (error) {
        res.status(StatusCode.BAD_REQUEST).send({
            error: `Error updating a task to done`
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