import http from '../TaskApi.js'

const TaskService = {

     createTask: (newTask) => {
        return http.post('/task', newTask)
    },
     showTasks: () => {
        return http.get('/task/all')
    },

    getTaskByName: (name) => {
        return http.get(`/task/name/${name}`)
    },

    getTaskById: (id) => {
        return http.get(`/task/${id}`)
    },

    updateTask: (id, task) => {
        return http.put(`/task/${id}`,task)
    },

    deleteTask: (id) => {
        return http.delete(`/task/${id}`)
    },
    updateDone: (id) => {
        return http.put(`/task/${id}`)
    }
}
export default TaskService
