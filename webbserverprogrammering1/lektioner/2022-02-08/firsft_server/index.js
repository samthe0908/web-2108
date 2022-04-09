//import express from 'express''
const express = require('express')
const port = 8080
const app = express()

// Read
app.get('/', (req, res)=> {
    console.log('get method')
    res.send(`välkommen till mitt API! på port ${port}`)
})

// Create
app.post('/', (req, res)=> {
    console.log('post method')
    res.send('got  a post request')
})

// Update
app.put('/', (req, res)=> {
    console.log('update method')
    res.send('got  a PUT/update request!')
})

// Delete
app.delete('/', (req, res)=> {
    console.log('delete method')
    res.send('got  a  Delete request')
})

app.listen(port, () =>{
    //console.log('server running on port 3001')
   console.log(`server running on port http://localhost: ${port}`)
})

