import  http from '../TaskApi.js'

const getAllTasks = () => {
    return http.get('/tasks')
}
 const createTask = (newTask) => {
    return http.post('/task/', newTask)
   
 }
 const getTaskByName = (name) => {
    return http.get(`/task/${name}`)
 }
 const updateTask = (changedTask) => {
    return http.put('/task',changedTask)
   
 }
 const deleteTask = (name) => {
    return http.delete(`/task/${name}`)

 }
 const updateDone = (id) => {
    return http.put(`/task/${id}`)
 }

export default {
    getAllTasks,
    createTask,
    getTaskByName,
    updateTask,
    deleteTask,
    updateDone

}


