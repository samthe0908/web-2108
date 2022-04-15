import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

// config stuff
const port = process.env.SERVER_PORT || 8080
const cors_options = {
    origin: '*',
    methods: ['GET', 'POST', "PUT", "DELETE"]
}
//skapa ExpressApp
const app = express()

//Middleware
app.use(cors(cors_options))

//Database
const userDatabase = [
    {
        name: 'Aram',
        age: 30,
        gender: 'Male'
    },
    {
        name: 'Bengtina',
        age: 19,
        gender: 'Female'
    },
    {
        name: 'Carin',
        age: 29,
        gender: 'Female'
    },
    {
        name: 'Emil',
        age: 32,
        gender: 'Male'
    }

]
//API Function
const userNames = () => {
  const names = []
    userDatabase.forEach(user => {
        names.push({
            name: user.name
        })
    })
    return names
}

const getUserByName = (name) => {
    let object = `Could not find "${ name }" in database`
    userDatabase.forEach(user => {
        if (name === user.name) {
            object = user
            return
        }
    })
    return object
}


//Endpoint + Business Logic
app.get('/', (req, res) => {
    res.send('API is Alive**')
})

//CRUD
//CREATE

//READ
app.get('/users',(req, res) =>{
    res.send(userDatabase)
})
app.get('/users/name',(req, res) =>{
    const responseFromDb = userNames()
    res.send(responseFromDb)
})
// hitta Aram
app.get('/user/:name',(req, res) =>{
    const name = req.params.name
    const responseFromDb = getUserByName(name)
    res.send(responseFromDb)
})

//UPDATE

//DELETE

//starta server
app.listen(port, ()=>{
    console.log(`Server running on address:port http://localhost:${port}`)
})