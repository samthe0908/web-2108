import http from '../TaskApi.js'

const taskUrl = `/task`
const taskAll = `/task/all`

const showTasks = () => {
    return http.get(taskAll)
}

const createTask = (newTask) => {
    return http.post(taskUrl, newTask)
}

const updateTask = (id, changedTask) => {
    return http.put(`/task/${id}`, changedTask)
}

const deleteTask = (id) => {
    return http.delete(`/task/${id}`)
}

const getTaskById = (id) => {
    return http.get(`/task/${id}`)
}

const getTaskByName = (name) => {
    return http.get(`/task/name/${name}`)
}

const updateDone = (id,  payload) => {
    return http.put(`/task/${id}/done`, payload)
}

export default {
    showTasks,
    createTask,
    updateTask,
    deleteTask,
    getTaskById,
    getTaskByName,
    updateDone
}