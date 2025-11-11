// Avaliação Formativa 1 - Conceitos Iniciais de JavaScript //
// Nome: Emanuely Macedo Padovan

// 1. Função com CallBack - Rastreamento de Carga

// const statusCargas = {
//     "BR12345": "Em trânsito para o centro de distribuição.",
//     "BR67890": "Entregue ao destinatário.",
//     "BR54321": "Aguardando retirada na agência"
// }

// function rastrearCarga(codigoRastreio, callback) {
//     const resultado = statusCargas[codigoRastreio]

//     if (resultado) {
//         callback(`Status da carga: ${resultado}`)
//     } else {
//         callback("Código de rastreio não encontrado!")
//     }
// }

// rastrearCarga("BR12345", function(mensagem){
//     console.log(mensagem)
// })

// Modelo do Celso

// const statusCargas = {
//     "BR12345": "Em trânsito para o centro de distribuição.",
//     "BR67890": "Entregue ao destinatário.",
//     "BR54321": "Aguardando retirada na agência"
// }

// function rastrearCarga(codigoRastreio, callback) {
//     return callback(codigoRastreio)
// }
// function buscarStatus(codigoRastreio) {
//     if (statusCargas [codigoRastreio]) {
//         return (statusCargas[codigoRastreio])
//     } else {
//         return "Código de rastreio não foi encontrado!"
//     }
// }

// console.log(rastrearCarga("BR12345", buscarStatus))
// console.log(rastrearCarga("BR98373", buscarStatus))

// 2. Classe Simples - Item de Estoque

// class ItemEstoque {
//     constructor(codigo, descricao, localizacao) {
//         this.codigo = codigo
//         this.descricao = descricao
//         this.localizacao = localizacao
//     }
//     obterLocalizacao() {
//         return this.localizacao
//     }
//     atualizarLocalizacao(novaLocalizacao) {
//         return this.localizacao = novaLocalizacao
//     }
// }

// let produto = new ItemEstoque("BR523", "Maçã", "Corredor A")

// console.log(`Código: ${produto.codigo} - ${produto.descricao} - ${produto.localizacao} | Mudar para: Corredor B -> ${produto.atualizarLocalizacao("Corredor B")}`)

// Modelo do Celso

// class ItemEstoque {
//     constructor(codigo, descricao, localizacao) {
//         this.descricao = descricao
//         this.codigo = codigo
//         this.localizacao = localizacao
//     }
//     obterLocalizacao() {
//         return this.localizacao
//     }
//     atualizarLocalizacao(novaLocalizacao) {
//         this.localizacao = novaLocalizacao
//     }
// }

// const item = new ItemEstoque("Br02813", "Maçã", "Corredor B")

// console.log(item.obterLocalizacao())
// item.atualizarLocalizacao("Corredor D")
// console.log(item.obterLocalizacao())

// 3. Classe Simples - Rota de Entrega

// class RotaDeEnterga {
//     constructor(codigo, veiculo, destino) {
//         this.codigo = codigo
//         this.veiculo = veiculo
//         this.destino = destino
//     }
//     alteraDestino(novoDestino) {
//         this.destino = novoDestino
//     }
//     exibirResumo() {
//         console.log(`Código: ${this.codigo}`)
//         console.log(`Veículo: ${this.veiculo}`)
//         console.log(`Destino: ${this.destino}`)
//     }
// }

// let rota1 = new RotaDeEnterga("74HIU", "Carro", "R. João de Arruda, Nair Maria - 50")
// rota1.exibirResumo()
// rota1.alteraDestino("Avenida Dom Pedro II")
// rota1.exibirResumo()

// Modelo do Celso

// class RotaDeEntrega {
//     constructor(codgio, veiculo, destino) {
//         this.codgio = codgio
//         this.veiculo = veiculo
//         this.destino = destino
//     }
//     alterarDestino(novoDestino) {
//         this.destino = novoDestino
//     }
//     exibirResumo() {
//         return `Rota: ${this.codgio} - ${this.veiculo} - ${this.destino}`
//     }
// }

// const rota = new RotaDeEntrega ("Br25D", "Corsa", "R. Jorge dos Santos do Grau")
// console.log(rota.exibirResumo())
// rota.alterarDestino("R. Nuvens de Sol")
// console.log(rota.exibirResumo())

// 4. Herança - Tipo de Embalagem

class Embalagem {
    constructor(id, pesoMaximo) {
        this.id = id 
        this.pesoMaximo = pesoMaximo
    }
}

class Caixa extends Embalagem{
    constructor(id, largura, altura, profundidade) {
        super(id, 25)
        this.largura = largura
        this.altura = altura
        this.profundidade = profundidade
    }
    podeConter(pesoItem) {
        return pesoItem <= this.pesoMaximo
    }
}

class Palete extends Embalagem{
    constructor(id, material) {
        super(id, 1000)
        this.material = material
    }
    podeConter(pesoItem) {
        return pesoItem <= this.pesoMaximo
    }
}

let caixa1 = new Caixa("BR1625", 34, 20, 10)
let palete1 = new Palete("BR4783","Madeira")

console.log(`${caixa1.id} - Caixa: ${caixa1.altura} x ${caixa1.largura} x ${caixa1.profundidade} - Peso de 20kg: ${caixa1.podeConter(20)}`)
console.log(`${palete1.id} - Palete de ${palete1.material} - Peso de 1005kg: ${palete1.podeConter(1005)}`)

// Modelo do Celso

class Embalagem {
    constructor(id, pesoMaximo) {
        this.id = id
        this.pesoMaximo = pesoMaximo
    }
}

class Caixa extends Embalagem {
    constructor(id, largura, altura, profundidade) {
        super(id, 25)
        this.largura = largura
        this.altura = altura
        this.profundidade = profundidade
    }
    podeConter(pesoItem) {
        return pesoItem <= this.pesoMaximo
    }
}

class Palete extends Embalagem {
    constructor(id, material) {
        super(id, 1000)
        this.material = material
    }
    podeConter(pesoItem) {
        return pesoItem <= this.pesoMaximo
    }
}

const caixa = new Caixa("Bu7360", 12, 12, 12)
console.log(caixa.podeConter(12))
console.log(caixa.podeConter(69))

const palete = new Palete("By1837", "Madeira")
console.log(palete.podeConter(100))
console.log(palete.podeConter(1005))

// 5. Herança + Polimorfismo - Tarefas do Almoxarifado

// class Tarefa {
//     constructor(descricao, responsavel) {
//         this.descricao = descricao
//         this.responsavel = responsavel
//     }
//     calcularTempoEstimado(){
//         return 0
//     }
// }

// class SepararPedido extends Tarefa {
//     constructor(descricao, responsavel, quantidadeItens) {
//         super(descricao, responsavel)
//         this.quantidadeItens = quantidadeItens
//     }
//     calcularTempoEstimado() {
//         return this.quantidadeItens * 5
//     }
// }

// class ConferirCarga extends Tarefa {
//     constructor(descricao, responsavel) {
//         super(descricao, responsavel)
//     }
//     calcularTempoEstimado() {
//         return 60
//     }
// }

// const tarefas = [
//     new SepararPedido("Computador", "Emanuely", 20),
//     new SepararPedido("Mouse", "Jaqueline", 22),
//     new ConferirCarga("Maçã", "Emanuely"),
//     new ConferirCarga("Jaca", "Jaqueline")
// ]

// for (let i = 0; i < tarefas.length; i++) {
//     let tarefa = tarefas[i]
//     console.log("Tarefa: ", tarefa.descricao)
//     console.log("Responsável: ", tarefa.responsavel)
//     console.log("Tempo Estimado: ", tarefa.calcularTempoEstimado(), "minutos")
// }

// Modelo do Celso

// class Tarefa {
//     constructor(descricao, responsavel) {
//         this.descricao = descricao
//         this.responsavel = responsavel
//     }
//     calcularTempoEstimado() {
//         return 0
//     }
// }

// class SepararPedido extends Tarefa {
//     constructor(descricao, responsavel, quantidadeItens) {
//         super(descricao, responsavel)
//         this.quantidadeItens = quantidadeItens
//     }
//     calcularTempoEstimado() {
//         return this.quantidadeItens * 5
//     }
// }

// class ConferirCarga extends Tarefa {
//     constructor(descricao, responsavel) {
//         super(descricao, responsavel)
//     }
//     calcularTempoEstimado() {
//         return 60
//     }
// }

// const tarefas = [
//     new SepararPedido("Separar Pedido: Computador", "Emanuely", 20),
//     new ConferirCarga("Conferir Carga: Garrafas", "José"),
//     new SepararPedido("Separar Pedido: Manta", "Nora", 70)
// ]

// for (let i = 0; i < tarefas.length; i++) {
//     let t = tarefas[i]
//     console.log(`Tarefas: ${t.descricao} - Responsável: ${t.responsavel} - Tempo: ${t.calcularTempoEstimado()} minutos`)
// }

// 6. Encaplumento - Controle de Almoxarifado

// class Almoxarifado {
//     #quantidade = 0
//     nome

//     constructor(nome) {
//         this.nome = nome
//     }

//     adicionarProduto(qtd) {
//         this.#quantidade +=qtd
//         return this.#quantidade
//     }
//     retirarProduto() {
//         this.#quantidade -= 1
//         return this.#quantidade
//     }
//     consultarEstoque() {
//         return `Produto: ${this.nome} - Quantidade: ${this.#quantidade}`
//     }
// }

// let produto1 = new Almoxarifado("Maçã")
// let produto2 = new Almoxarifado("Uva")

// console.log(`Produto: ${produto1.nome} - Quantidade: ${produto1.adicionarProduto(45)}`) // 1
// console.log(`Produto: ${produto1.nome} - Quantidade: ${produto1.adicionarProduto()}`) // 2
// console.log(`Produto: ${produto1.nome} - Quantidade: ${produto1.retirarProduto()}`) // 1

// console.log(`${produto1.consultarEstoque()}`)
// console.log(`${produto2.consultarEstoque()}`)