import express from 'express'

const app = express()
app.use(express.json())

const livros = [
    {
        isbn: 1,
        titulo: "É assim que acaba",
        editora: "Galera",
        ano_publicacao: "2016"
    },
    {
        isbn: 2,
        titulo: "Moby Dick",
        editora: "Editora 34",
        ano_publicacao: "1851"
    }
]

function buscarLivro(isbn) {
    return livros.findIndex(livros => {
        return livros.isbn === Number(isbn)
    })
}

app.get('/', (req, res) => {
    res.status(200).send("Biblioteca Saber & Cia")
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.get('/livros/:isbn', (req, res) => {
    const index = buscarLivro(req.params.isbn)
    res.status(200).json(livros[index])
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).json(req.body)
})

app.put('/livros/:isbn', (req,res) => {
    const index = buscarLivro(req.params.isbn)
    livros[index].titulo = req.body.titulo
    livros[index].editora = req.body.editora
    livros[index].ano_publicacao = req.body.ano_publicacao

    res.status(200).json(livros[index])
})

app.delete('/livros/:isbn', (req,res) => {
    const index = buscarLivro(req.params.isbn)
    livros.splice(index,1)
    res.status(200).send("Livro removido com sucesso")
})

const autor = [
    {
        id_autor: 101,
        nome: 'Colleen Hoover',
        nacionalidade: 'Norte Americana'
    },
    {
        id_autor: 102,
        nome: "Herman Melville",
        nacionalidade: "Norte Americano"
    }
]

function buscarAutor(id_autor) {
    return autor.findIndex(autor => {
        return autor.id_autor === Number(id_autor)
    })
}

app.get('/autores', (req, res) => {
    res.status(200).json(autor)
})

app.get('/autores/:id_autor', (req, res) => {
    const index = buscarAutor(req.params.id_autor)
    res.status(200).json(autor[index])
})

app.post('/autores', (req, res) => {
    autor.push(req.body)
    res.status(201).json(req.body)
})

app.put('/autores/:id_autor', (req,res) => {
    const index = buscarAutor(req.params.id_autor)
    autor[index].nome = req.body.nome
    autor[index].nacionalidade = req.body.nacionalidade

    res.status(200).json(autor[index])
})

app.delete('/autores/:id_autor', (req,res) => {
    const index = buscarAutor(req.params.id_autor)
    autor.splice(index,1)
    res.status(200).send("Livro removido com sucesso")
})

const autor_livro = [
    {
        isbn: 1,
        id_autor: 101
    },
    {
        isbn: 2,
        id_autor: 102
    }
]

function buscarAutor_Livro(id_autor) {
    return autor_livro.findIndex(autor_livro => {
        return autor_livro.id_autor === Number(id_autor)
    })
}

app.get('/autores-livros', (req, res) => {
    res.status(200).json(autor_livro)
})

app.get('/autores-livros/:id_autor', (req, res) => {
    const index = buscarAutor_Livro(req.params.id_autor)
    res.status(200).json(autor_livro[index])
})

app.post('/autores-livros', (req, res) => {
    autor_livro.push(req.body)
    res.status(201).json(req.body)
})

app.put('/autores-livros/:id_autor', (req,res) => {
    const index = buscarAutor_Livro(req.params.id_autor)
    autor_livro[index].isbn = req.body.isbn
    autor_livro[index].id_autor = req.body.id_autor

    res.status(200).json(autor_livro[index])
})

app.delete('/autores-livros/:id_autor', (req,res) => {
    const index = buscarAutor_Livro(req.params.id_autor)
    autor_livro.splice(index,1)
    res.status(200).send("Livro removido com sucesso")
})

const exemplar = [
    {
        id_exemplar: 10, 
        status_exemplar: 'Emprestado',
        isbn: 1
    },
    {
        id_exemplar: 11,
        status_exemplar: 'Emprestado',
        isbn: 2
    }
]

function buscarExemplar(id_exemplar) {
    return exemplar.findIndex(exemplar => {
        return exemplar.id_exemplar === Number(id_exemplar)
    })
}

app.get('/exemplares', (req, res) => {
    res.status(200).json(exemplar)
})

app.get('/exemplares/:id_exemplar', (req, res) => {
    const index = buscarExemplar(req.params.id_exemplar)
    res.status(200).json(exemplar[index])
})

app.post('/exemplares', (req, res) => {
    exemplar.push(req.body)
    res.status(201).json(req.body)
})

app.put('/exemplares/:id_exemplar', (req,res) => {
    const index = buscarExemplar(req.params.id_exemplar)
    exemplar[index].status_exemplar = req.body.status_exemplar
    exemplar[index].isbn = req.body.isbn

    res.status(200).json(exemplar[index])
})

app.delete('/exemplares/:id_exemplar', (req,res) => {
    const index = buscarExemplar(req.params.id_exemplar)
    exemplar.splice(index,1)
    res.status(200).send("Livro removido com sucesso")
})

const membro = [
    {
        id_membro: 1001,
        nome: "Emanuely Macedo Padovan",
        endereco: "Rua AB, Bairro Cilva",
        telefone: "11 99024-6547"
    },
    {
        id_membro: 1002,
        nome: "José Teixeira",
        endereco: "Rua BO, Bairro Norte",
        telefone: "19 97658-5432"
    }
]

function buscarMembro(id_membro) {
    return membro.findIndex(membro => {
        return membro.id_membro === Number(id_membro)
    })
}

app.get('/membros', (req, res) => {
    res.status(200).json(membro)
})

app.get('/membros/:id_membro', (req, res) => {
    const index = buscarMembro(req.params.id_membro)
    res.status(200).json(membro[index])
})

app.post('/membros', (req, res) => {
    membro.push(req.body)
    res.status(201).json(req.body)
})

app.put('/membros/:id_membro', (req,res) => {
    const index = buscarMembro(req.params.id_membro)
    membro[index].nome = req.body.nome
    membro[index].endereco = req.body.endereco
    membro[index].telefone = req.body.telefone

    res.status(200).json(membro[index])
})

app.delete('/membros/:id_membro', (req,res) => {
    const index = buscarMembro(req.params.id_membro)
    membro.splice(index,1)
    res.status(200).send("Livro removido com sucesso")
})

const emprestimo = [
    {
        id_emprestimo: 111,
        data_emprestimo: "17/11/2025",
        data_devolucao: "24/09/2025",
        data_efetiva_devolucao: "21/09/2025",
        id_membro: 1001,
        id_exemplar: 10
    },
    {
        id_emprestimo: 112,
        data_emprestimo: "18/10/2025",
        data_devolucao: "25/10/2025",
        data_efetiva_devolucao: "24/10/2025",
        id_membro: 1002,
        id_exemplar: 11
    }
]

function buscarEmprestimo(id_emprestimo) {
    return emprestimo.findIndex(emprestimo => {
        return emprestimo.id_emprestimo === Number(id_emprestimo)
    })
}

app.get('/emprestimos', (req, res) => {
    res.status(200).json(emprestimo)
})

app.get('/emprestimos/:id_emprestimo', (req, res) => {
    const index = buscarEmprestimo(req.params.id_emprestimo)
    res.status(200).json(emprestimo[index])
})

app.post('/emprestimos', (req, res) => {
    emprestimo.push(req.body)
    res.status(201).json(req.body)
})

app.put('/emprestimos/:id_emprestimo', (req,res) => {
    const index = buscarEmprestimo(req.params.id_emprestimo)
    emprestimo[index].data_emprestimo = req.body.data_emprestimo
    emprestimo[index].data_devolucao = req.body.data_devolucao
    emprestimo[index].data_efetiva_devolucao = req.body.data_efetiva_devolucao
    emprestimo[index].id_membro = req.body.id_membro
    emprestimo[index].id_exemplar = req.body.id_exemplar

    res.status(200).json(emprestimo[index])
})

app.delete('/emprestimos/:id_emprestimo', (req,res) => {
    const index = buscarEmprestimo(req.params.id_emprestimo)
    emprestimo.splice(index,1)
    res.status(200).send("Livro removido com sucesso")
})

export default app