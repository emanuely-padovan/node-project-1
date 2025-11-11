// 1. Função Callback - Verificação de Status de Inventário 

// const estoque = {
//     teclado: true,
//     monitor: false,
//     mouse: true,
//     servidor: false    
// }

// function verificarStatusItem(item, callback) {
//     return callback(item)
// }

// function disponibItem(item) {
//     if (estoque[item]) {
//         return 'Item disponível para despacho!'
//     } else {
//         return 'Item em falta no estoque!'
//     }
// }

// console.log(verificarStatusItem("teclado", disponibItem))

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
//     detalharTarefa(){
//         return `Tarefa: ${this.descricao} | Tem como prioridade '${this.prioridade}' e duração de ${this.duracaoEstimada}`
//     }
// }

// let tarefa = new Tarefa("Compras de Mercado", "comprar pão", "20 minutos")
// console.log(tarefa.detalharTarefa())
// tarefa.alterarPrioridade("Sair de casa")
// console.log(tarefa.detalharTarefa())

// 3. Classe Simples - Custo de Projeto

// class CustoProjeto {
//     constructor(nomeProjeto, orcamentoBase, diasPlanejados) {
//         this.nomeProjeto = nomeProjeto
//         this.orcamentoBase = orcamentoBase
//         this.diasPlanejados = diasPlanejados
//     }
//     calcularCustoDiario(){
//         return this.orcamentoBase / this.diasPlanejados
//     }
//     resumoCusto(){
//         return `${this.nomeProjeto} - R$ ${this.orcamentoBase} - ${this.diasPlanejados} - ${this.calcularCustoDiario()}`
//     }
// }

// let projeto = new CustoProjeto("Projeto de Ideias ON", 1000, 5)
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
// }

// class Eletronico extends Ativo {
//     constructor(nome, valorInicial, dataAquisicao, vidaUtilAnos) {
//         super(nome, valorInicial, dataAquisicao)
//         this.vidaUtilAnos = vidaUtilAnos
//     }
//     calcularDepreciacao() {
//         const depreciacao = this.valorInicial / this.vidaUtilAnos
//         if (depreciacao < 0) {
//             return 0
//         } else {
//             return depreciacao
//         }
//     }
//     fichaTecnica() {
//         return `${this.nome} - ${this.valorInicial} - ${this.dataAquisicao} - Ano Útil: ${this.vidaUtilAnos} - Depreciação: ${this.calcularDepreciacao()}`
//     }
// }

// class Software extends Ativo {
//     constructor(nome, valorInicial, dataAquisicao, licencaMensal) {
//         super(nome, valorInicial, dataAquisicao)
//         this.licencaMensal = licencaMensal
//     }
//     calcularDepreciacao(){
//         return this.licencaMensal
//     }
//     fichaTecnica() {
//         return `${this.nome} - ${this.valorInicial} - ${this.dataAquisicao} - Licença Mensal: ${this.licencaMensal} - Depreciação: ${this.calcularDepreciacao()}`
//     }
// }

// const eltronico = new Eletronico("Mouse", 12.50, "12/10/2025", 4)
// console.log(eltronico.fichaTecnica())

// const eletronico2 = new Eletronico("Computador", -8.50, "20/10/2029", 10)
// console.log(eletronico2.fichaTecnica())

// const software = new Software("APP", 1245, "20/10/2089", 1233)
// console.log(software.fichaTecnica())

// 5. Herança + Poliformismo - Níveis de Risco de Atividades 

// class Atividade {
//     constructor(nome, custoBase){
//         this.nome = nome
//         this.custoBase = custoBase
//     }
//     calcularCustoTotal() {
//         return this.custoBase
//     }
// }

// class BaixoRisco extends Atividade {
//     calcularCustoTotal() {
//         return this.custoBase - (this.custoBase * 10/100)
//     }
// }

// class MedioRisco extends Atividade {
//     calcularCustoTotal() {
//         return this.custoBase
//     }
// }

// class AltoRisco extends Atividade {
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

// 6. Encapsulamento - Controle de Orçamento de Projeto

class OrcamentoProjeto {
    #verbaAlocada = 0
    nome

    constructor(nome) {
        this.nome = nome
    }
    registrarValorInicial(valorI) {
        this.#verbaAlocada += valorI
        return this.#verbaAlocada
    }
    registrarDespesa(valorD) {
        if (valorD > this.#verbaAlocada) {
            return "Saldo insuficiente!"
        } else {
            return this.#verbaAlocada -= valorD
        }
    }
    consultarSaldo(){
        return `O saldo é de: ${this.#verbaAlocada}`
    }
}

const orcamento1 = new OrcamentoProjeto("PUBA")
console.log(orcamento1.registrarValorInicial(120))
console.log(orcamento1.registrarDespesa(12))
console.log(orcamento1.consultarSaldo())