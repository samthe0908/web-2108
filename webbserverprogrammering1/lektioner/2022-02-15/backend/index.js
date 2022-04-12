import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
//const port=3001
const port = process.env.SERVER_PORT
const app = express()

const options = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(options))
// app.use(cors({
//     origin: '*',
//     methods: ['GET', 'POST', 'PUT', 'DELETE']
// }))

app.get ('/', (req, res)=>{
    res.send('API is alive!')

})

app.get('/helloWorld', (req, res) => {
    res.send('Hello World')
})

//Post
app.post('/', (req, res) => {
    res.send('Got a Post request')
})

app.post('/name/:input', (req, res) => {
    const input = req.params.input
    res.send(`your name is:${input}` )
})

//calcualtorAPI
app.post('/calc/add/:num1/:num2', (req, res) => {
   // tolkas som sträng
   //  let number1 = req.params.num1
   //  let number2 = req.params.num2
   //  let sum = number1 + number2

    // tolkas som nummer
     let number1 = Number(req.params.num1)
     let number2 = Number(req.params.num2)
     let sum = number1 + number2
    res.send(`Summan av talen ${number1} +${number2} = ${sum}`)

})
app.post('/calc/sub/:num1/:num2', (req, res) => {
    let number1 = Number(req.params.num1)
    let number2 = Number(req.params.num2)
    let sum= number1 - number2
    res.send(`Differensen av talen ${number1} - ${number2} = ${sum}`)

})

app.post('/calc/multi/:num1/:num2', (req, res) => {
    let number1 = Number(req.params.num1)
    let number2 = Number(req.params.num2)
    let sum = number1 * number2
    res.send(`Produkten av talen ${number1} * ${number2} = ${sum}`)

})

app.post('/calc/div/:num1/:num2', (req, res) => {
    let number1 = Number(req.params.num1)
    let number2 = Number(req.params.num2)
    let sum = number1 / number2
    if(number2===0){
        res.send('Division är inte tillåtet')
    }
    res.send(`Kvoten av talen ${number1} / ${number2} = ${sum}`)

})

app.listen(port, ()=>{
    console.log(`server is running on port : localhost:${port}`)
})