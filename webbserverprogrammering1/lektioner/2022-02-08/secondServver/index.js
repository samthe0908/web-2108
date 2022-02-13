const express = require('express')
const port = 3001
const app = express()

app.get('/', (req, res) =>{
    console.log('Get Method')
        res.send (`välkommen till min api: ${port}!`)
})

app.listen (port, () => {
    console.log(`server running on port http://localhost:${port}`)
})
