// NOME: Emanuely Macedo Padovan
// DATA: 04/12/2025

import express from "express"

const app = express()
app.use(express.json())

const filmes = [
    {
        id: 1,
        nome: "O Rei Leão",
        produtora: "Disney",
        genero: "Fantasia/Animação",
        ano_lancamento: "2022"
    }
]

function buscarFilme(id) {
    return filmes.findIndex(filme => {
        return filme.id === Number(id)
    })
}

app.get("/", (req, res) => {
    res.status(200).send("CRUD de Filmes")
})

app.get("/filmes", (req, res) => {
    res.status(200).json(filmes)
})

app.get("/filmes/:id", (req, res) => {
    const index = buscarFilme(req.params.id)
    res.status(200).json(filmes[index])
})

app.post("/filmes", (req, res) => {
    filmes.push(req.body)
    res.status(201).json(req.body)
})

app.put("/filmes/:id", (req, res) => {
    const index = buscarFilme(req.params.id)

    filmes[index].nome = req.body.nome
    filmes[index].produtora = req.body.produtora
    filmes[index].genero = req.body.genero
    filmes[index].ano_lancamento = req.body.ano_lancamento

    res.status(200).json(filmes[index])
})

app.delete("/filmes/:id", (req, res) => {
    const index = buscarFilme(req.params.id)
    filmes.splice(index, 1)
    // res.status(200).json()
    res.status(200).send("Filme removido com sucesso!") // - Maneira como aprendemos...
})

export default app