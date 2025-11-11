// Aula 1 - Conhecendo o API e o JSON

import express from 'express'

const app = express()

// Aula 2 - Continuação do conteúdo
app.use(express.json())

const users = []

app.listen(3000, () => console.log("Servidor está rodando!!"))
app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

app.post('/usuarios', (req, res) => {
    users.push(req.body) // Não é o body da página HTML, mas sim do protocolo HTTP...

    res.status(201).json(req.body)
})