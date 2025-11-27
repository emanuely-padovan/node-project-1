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

function buscarLivro(isbn) {
    return livros.findIndex(livro => {
        return livro.isbn === Number(isbn)
    })
}

app.get('/', (req,res) => {
    res.status(200).send("Biblioteca Saber & Cia")
})

app.get('/livros', (req,res) => {
    res.status(200).json(livros)
})

app.get('/livros/:isbn', (req,res) => {
    const index = buscarLivro(req.params.isbn)
    res.status(200).json(livros[index])
})

app.post('/livros', (req,res) => {
    livros.push(req.body)
    res.status(201).json(req.body)
})

app.put('/livros/:isbn', (req,res) => {
    const index = buscarLivro(req.params.isbn)
    livros[index].titulo_livro = req.body.titulo_livro
    livros[index].editora = req.body.editora
    livros[index].ano_publicacao = req.body.ano_publicacao

    res.status(200).json(livros[index])
})

app.delete('/livros/:isbn', (req,res) => {
    const index = buscarLivro(req.params.isbn)
    livros.splice(index,1)
    res.status(200).send("Livro removido com sucesso")
})

export default app


// MONGO DB
// User: emanuelypadovan
// Password: Un4LD8fRAywg5Ncd
// Conexão: mongodb+srv://emanuelypadovan:Un4LD8fRAywg5Ncd@biblioteca.qgyet0j.mongodb.net/?appName=Biblioteca