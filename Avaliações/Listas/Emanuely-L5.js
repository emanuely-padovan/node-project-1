// 

const estoque = {
    caixa: 50,
    palete: 10,
    empilhadeira: 2
}

function verificarEstoque(produto, quantidade, callback) {
    return callback(produto, quantidade)
}

function conferirEstoque (produto, quantidade) {
    if (estoque[produto] >= quantidade) {
        return 'Pedido Aprovado'
    } else {
        return 'Saldo Insuficiente'
    }
}

console.log(verificarEstoque[caixa, 20, conferirEstoque()])

// 14. Classe Funcionário com Herança e Polimorfismo englobado

class Funcionario {
    constructor (nome, salarioBase) {
        this.nome = nome
        this.salarioBase = salarioBase
    }
    calcularSalarioLiquido() {
        return this.salarioBase
    }
}

class FuncionarioCLT extends Funcionario {
    constructor(nome, salarioBase) {
        super(nome, salarioBase)
    }
    calcularSalarioLiquido() {
        return this.salarioBase * 0.9 + this.salarioBase * 0.05
    }
}

class FuncionarioPJ extends Funcionario {
    calcularSalarioLiquido() {
        return this.salarioBase
    }
}

class Estagiario extends Funcionario {
    calcularSalarioLiquido() {
        return this.salarioBase * 0.95 // Desconto do salário líquido
    }
}

let CLT = new FuncionarioCLT('José', 1000)
let PJ = new FuncionarioPJ('Celso', 10000)
let estagiario = new Estagiario('Lívia', 120)

console.log(`${CLT.nome} - ${CLT.calcularSalarioLiquido()}`)
console.log(`${PJ.nome} - ${PJ.calcularSalarioLiquido()}`)
console.log(`${estagiario.nome} - ${estagiario.calcularSalarioLiquido()}`)

