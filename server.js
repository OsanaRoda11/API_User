import express, { request, response } from 'express'

const app = express()

app.get('/usuario', (request, response) =>{
    response.send("Ok, deu certo!")
})

app.listen(3000)