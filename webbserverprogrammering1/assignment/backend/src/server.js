import express from 'express'
import configarations from "./configuration/configarations.js";
import ApplyMiddlewares from "./configuration/ApplyMiddlewares.js";
import todoData from "./data.js";

const app = express()
ApplyMiddlewares(app)

const getTodoByName = (name) => {
    let object = `Could not find "${ name }" in database`
    todoData.forEach(task => {
        if (name === task.name) {
            object = task
            return
        }
    })
    return object
}


const updateTodoByName = (todo, newTodo, name, newName) => {
    let object = `Could not find "${ name }" in database`
    todoData.forEach(task => {
        if (name === task.name) {
            task.todo = newTodo
            task.name = newName
            object = task
            return
        }
    })
    return object
}

const deleteUserByName = (name) => {
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


app.get('/', (req, res) => {
    res.status(200).send('API is Alive :)')
})

app.get('/tasks',(req, res) => {
    res.status(200).send(todoData)
})

app.get('/task/:name', (req, res) => {
    const name = req.params.name
    const responseFromDb = getTodoByName(name)
    res.status(200).send(responseFromDb)
})

app.post('/task/', (req, res) => {
    const { id, todo, name, done} = req.body
    const newTask = {
        id: id,
        todo: todo,
        name: name,
        done: done
    }
    todoData.push(newTask)
    res.status(201).send(todoData)

})

app.put('/task/', (req, res) => {
    const {todo, newTodo, name, newName} = req.body
    const response = updateTodoByName(todo,newTodo,name, newName)
    res.status(202).send(response)
})

app.put('/task/:id', (req, res) => {
    const id = Number(req.params.id)
    todoData[id].done = !todoData[id].done
    res.status(202).send(todoData[id])
})

app.delete('/task/:name', (req, res) => {
    const name = req.params.name
    const responseFromDb = deleteUserByName(name)
    res.status(200).send(responseFromDb)

})
configarations.connectToPort(app)

// app.listen(port, ()=> {
//     console.log(`server is running om port http://localhost:${port}`)
//
// })


