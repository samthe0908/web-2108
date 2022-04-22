import TaskController from "../controllers/TaskController.js";


const routes = (app) =>{

    app.get('/tasks', TaskController.showTasks)

    app.get('/task/:name', TaskController.getTaskByName)

    app.post('/task/', TaskController.createTask)

    app.put('/task/', TaskController.updateTaskByName)

    app.put('/task/:id', TaskController.updateDone)

    app.delete('/task/:name',TaskController.deleteTaskByName)

}

export default {
    routes
}