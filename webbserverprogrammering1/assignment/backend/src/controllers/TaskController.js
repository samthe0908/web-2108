import todoData from "../data.js";

const showTasks = (req, res) => {
    res.status(200).send(todoData)
}

const searchTaskByName = (name) => {
    let object = `Could not find "${ name }" in database`
    todoData.forEach(task => {
        if (name === task.name) {
            object = task
            return task
        }
    })
    return object
}
const getTaskByName = (req,res)=> {
    const name = req.params.name
    const responseFromDb = searchTaskByName(name)
    res.status(200).send(responseFromDb)
}

const createTask = (req, res)=>{
    const { id, todo, name, done} = req.body
    const newTask = {
        id: id,
        todo: todo,
        name: name,
        done: done
    }
    todoData.push(newTask)
    res.status(201).send(todoData)
}

const modifyTaskByName = (todo, newTodo, name, newName) => {
    let object = `Could not find "${ name }" in database`
    todoData.forEach(task => {
        if (name === task.name) {
            task.todo = newTodo
            task.name = newName
            object = task
            return task
        }
    })
    return object
}
const updateTaskByName = (req, res)  =>{
    const {todo, newTodo, name, newName} = req.body
    const response = modifyTaskByName(todo,newTodo,name, newName)
    res.status(202).send(response)
}

const removeTaskByName = (name) => {
    let text = `User with name: "${name}" `
    for (let i = 0; i < todoData.length; i++) {
        if (name === todoData[i].name) {
            text += `was deleted from database!`
            todoData.splice(i, 1)
            return text
        }
    }

    text += `don't exist in database!`
    return text
}
const deleteTaskByName = (req, res) => {
    const name = req.params.name
    const responseFromDb = removeTaskByName(name)
    res.status(200).send(responseFromDb)
}

const updateDone = (req, res) => {
    const id = Number(req.params.id)
    todoData[id].done = !todoData[id].done
    res.status(202).send(todoData[id])
}
export default {
    showTasks,
    createTask,
    getTaskByName,
    updateTaskByName,
    deleteTaskByName,
    updateDone,
}

