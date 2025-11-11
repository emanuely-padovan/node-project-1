import express from 'express'

const app = express()
app.use(express.json())

const products= []

app.listen(4000, () => console.log("Servidor está rodando!!"))

app.get('/produtos', (req, res) => {
    res.status(200).json(products)
})

app.post('/produtos', (req, res) => {
    products.push(req.body) // Não é o body da página HTML, mas sim do protocolo HTTP...

    res.status(201).json(req.body)
})