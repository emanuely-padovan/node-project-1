import express from 'express'

const app = express()

app.use(express.json())

const livros = [
    {
        isbn:1,
        titulo_livro:"Java - Como Programar?",
        editora:"Saber",
        ano_publicacao:"2002"
    },
    {
        isbn:2,
        titulo_livro:"Java - Como Programar?",
        editora:"Saber",
        ano_publicacao:"2002"
    }
]

app.get('/', (req,res) => {
    res.status(200).send("Biblioteca Saber & Cia")
})

export default app