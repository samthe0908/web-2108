import TaskControllers from "../controllers/TaskControllers.js";

const routes = (app) => {

    app.post ('/task', TaskControllers.createTask)

    app.get('/task/all', TaskControllers.showTasks)
    app.get('/task/:name', TaskControllers.getTaskByName)
    // app.get(`/searchTask/:name', TaskControllers.getTaskByName)
        
    app.get('/task/:id', TaskControllers.getTaskById)

    app.put('/task/:id', TaskControllers.updateTaskById)
    app.delete('/task/:id', TaskControllers.deleteTaskById)
    app.put('/task/:id', TaskControllers.updateDone)
   // app.put(updateDone, TaskControllers.updateDone())


}
export default{
 routes
}
