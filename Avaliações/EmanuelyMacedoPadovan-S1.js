// Avaliação Somativa 1 - Conceitos Iniciais de JavaScript
// Nome: Emanuely Macedo Padovan

// 1. Função Callback - Verificação de Status de Inventário (1)

// const estoque = {
//     teclado: true,
//     monitor: false,
//     mouse: true,
//     servidor: false    
// }

// function verificarStatusItem(item, callback) {
//     return callback(item)
// }

// function rastreioStatus(item) {
//     if (estoque [item]) {
//         return "Item disponível para despacho!"
//     } else {
//         return "Item em falta no estoque!"
//     }
// }

// console.log(verificarStatusItem("teclado", rastreioStatus))
// console.log(verificarStatusItem("monitor", rastreioStatus))

// 2. Classe Simples - Tarefa de Projeto

// class Tarefa {
//     constructor(descricao, prioridade, duracaoEstimada) {
//         this.descricao = descricao
//         this.prioridade = prioridade
//         this.duracaoEstimada = duracaoEstimada
//     }
//     alterarPrioridade(novaPrioridade) {
//         this.prioridade = novaPrioridade
//     }
//     detalharTarefa() {
//         return `Tarefa: ${this.descricao} - ${this.prioridade} - ${this.duracaoEstimada} minutos`
//     }
// }

// const tarefa = new Tarefa("Jogar o lixo", "Média", 5)
// console.log(tarefa.detalharTarefa())
// tarefa.alterarPrioridade("Baixa")
// console.log(tarefa.detalharTarefa())

// 3. Classe Simples - Custo de Projeto

// class CustoProjeto {
//     constructor(nomeProjeto, orcamentoBase, diasPlanejados) {
//         this.nomeProjeto = nomeProjeto
//         this.orcamentoBase = orcamentoBase
//         this.diasPlanejados = diasPlanejados
//     }
//     calcularCustoDiario() {
//         return this.orcamentoBase / this.diasPlanejados
//     }
//     resumoCusto() {
//         return `${this.nomeProjeto} - R$ ${this.orcamentoBase} - ${this.diasPlanejados} - ${this.calcularCustoDiario()}`
//     }
// }

// const projeto = new CustoProjeto("PharmaVida", 38000, 38)
// console.log(projeto.resumoCusto())

// 4. Herança - Tipos de Ativos

// class Ativo {
//     constructor(nome, valorInicial, dataAquisicao) {
//         this.nome = nome
//         this.valorInicial = valorInicial
//         this.dataAquisicao = dataAquisicao
//     }
//     calcularDepreciacao() {
//         return this.valorInicial
//     }
//     fichaTecnica() {
//         return "Ficha"
//     }
// }

// class Eletronico extends Ativo {
//     constructor(nome, valorInicial, dataAquisicao, vidautilAnos) {
//         super(nome, valorInicial, dataAquisicao)
//         this.vidautilAnos = vidautilAnos
//     }
//     calcularDepreciacao() {
//         let e = this.valorInicial/this.vidautilAnos
//         if (e < 0){
//             return "Não foi possível realizar o cálculo!"
//         } else {
//             return e
//         }
//     }
//     fichaTecnica() {
//         return `${this.nome} - ${this.valorInicial} - ${this.dataAquisicao} - Ano Útil: ${this.vidautilAnos} - Depreciação: ${this.calcularDepreciacao()}`
//     }
// }

// class Software extends Ativo {
//     constructor(nome, valorInicial, dataAquisicao, licencaMensal) {
//         super(nome, valorInicial, dataAquisicao)
//         this.licencaMensal = licencaMensal
//     }
//     calcularDepreciacao() {
//         return this.licencaMensal
//     }
//     fichaTecnica() {
//         return `${this.nome} - ${this.valorInicial} - ${this.dataAquisicao} - Licença Mensal: ${this.licencaMensal} - Depreciação: ${this.calcularDepreciacao()}`
//     }
// }

// const eletronico1 = new Eletronico("Computador", 2000, "20/10/2029", 5)
// console.log(eletronico1.fichaTecnica())

// const eletronico2 = new Eletronico("Mouse", -8.50, "20/10/2029", 10)
// console.log(eletronico2.fichaTecnica())

// const software = new Software("APP", 1245, "20/10/2089", 1233)
// console.log(software.fichaTecnica())

// 5. Herança + Poliformismo - Níveis de Risco de Atividades (2)

// class Atividade {
//     constructor(nome, custoBase) {
//         this.nome = nome 
//         this.custoBase = custoBase 
//     }
// }

// class BaixoRisco extends Atividade {
//     constructor(nome, custoBase) {
//         super(nome, custoBase)
//     }
//     calcularCustoTotal() {
//         return this.custoBase - (this.custoBase * 10/100)
//     }
// }

// class MedioRisco extends Atividade {
//     constructor(nome, custoBase) {
//         super(nome, custoBase)
//     }
//     calcularCustoTotal() {
//         return this.custoBase
//     }
// }

// class AltoRisco extends Atividade {
//     constructor(nome, custoBase) {
//         super(nome, custoBase)
//     }
//     calcularCustoTotal() {
//         return this.custoBase + 500
//     }
// }

// const atividades = [
//     new BaixoRisco("Escrita", 120),
//     new BaixoRisco("Desenho", 130),
//     new MedioRisco("Levantamento de requisitos", 148),
//     new MedioRisco("Construção", 159),
//     new AltoRisco("Execução", 295)
// ]
// for (let i = 0; i < atividades.length; i++) {
//     let a = atividades[i]
//     console.log("Nome: ", a.nome)
//     console.log("Custo: ", a.custoBase)
//     console.log("Custo Total: ", a.calcularCustoTotal())
// }

// 6. Encapsulamento - Controle de Orçamento de Projeto (3)

class OrcamentoProjeto {
    #verbaAlocada = 0
    nomeProjeto

    constructor(nomeProjeto) {
        this.nomeProjeto = nomeProjeto
    }
    registrarValorInicial(valorI) {
        this.#verbaAlocada += valorI
        return this.#verbaAlocada
    }
    registrarDespesa(valorD) {
        if (valorD > this.#verbaAlocada) {
            return "Saldo insuficiente!"
        } else {
            this.#verbaAlocada -= valorD
            return `Despesa registrada com sucesso: ${this.#verbaAlocada}`
        }
    }
    consultarSaldo() {
        return `O saldo é de: ${this.#verbaAlocada}`
    }
}

const orcamento1 = new OrcamentoProjeto("PUBA")
console.log(orcamento1.registrarValorInicial(120))
console.log(orcamento1.registrarDespesa(12))
console.log(orcamento1.consultarSaldo())

const orcamento2 = new OrcamentoProjeto("JND")
console.log(orcamento2.registrarValorInicial(130))
console.log(orcamento2.registrarDespesa(1345))
console.log(orcamento2.consultarSaldo())