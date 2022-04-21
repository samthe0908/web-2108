import express from 'express'
import dotenv from "dotenv";
import cors from "cors";
import todoData from "./data.js";

dotenv.config()
const port = process.env.SERVER_PORT || 8080
const allowedRequestOrigins = '*'
const allowedRequestMethods = ['GET', 'POST', 'PUT', 'DELETE']

const cors_options = {
    origin: allowedRequestOrigins,
    methods: allowedRequestMethods
}

const app = express()

app.use(cors(cors_options))
app.use(express.json())

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

const updateTodoByName = (todo, newTodo, name, done) => {
    let object = `Could not find "${ name }" in database`
    todoData.forEach(task => {
        if (name === task.name) {
            task.todo = newTodo
            task.name = name
            task.done = done
            object = task
            return
        }
    })
    return object
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

app.put('/task/', (req, res) => {
    const {todo, newTodo, name, done } = req.body
    const response = updateTodoByName(todo, newTodo, name, done)
    res.status(202).send(response)
})

app.listen(port, ()=> {
    console.log(`server is running om port http://localhost:${port}`)

})


