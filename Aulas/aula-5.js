// Definindo um construtor

// class Pessoa {
//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade
//     }
//     saudacao() {
//     return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
//     }
// }

// class Pessoa {
//     constructor(nome, idade){
//         this.nome = nome
//         this.idade = idade
//     }

//     saudacao(){
//         return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
//     }
// }
// // Criando um objeto a partir da classe Pessoa
// const pessoa1 = new Pessoa("Emanuely Macedo Padovan", 16)
// // Chamando o método do objeto
// pessoa1.saudacao()

// console.log(pessoa1.saudacao())

// class ContaBancaria {
//     #saldo
//     numeroConta
	
//     constructor(saldo, numeroConta){
//         this.#saldo = saldo
//         this.numeroConta = numeroConta
//     }
//     exibirSaldo(){
//         return this.#saldo
//     }
// }

// let conta1 = new ContaBancaria(100, 12345)
// console.log(conta1.exibirSaldo())
// console.log(conta1.numeroConta)

// // Para exibir outro valor de saldo
// conta1.saldo = 200
// console.log(conta1.saldo)


// class ContaBancaria {
//     #saldo
//     numeroConta

//     constructor({ saldo, numeroConta }) {
//         this.#saldo = saldo
//         this.numeroConta = numeroConta
//     }

//     // Getter
//     get getSaldo() {
//         return this.#saldo
//     }

//     // Setter
//     set setSaldo(novoSaldo) {
//         if (typeof novoSaldo === 'number' && novoSaldo >= 0) {
//             this.#saldo = novoSaldo
//         } else {
//             console.log("Saldo inválido.")
//         }
//     }
// }

// Criando a conta corretamente
// let conta = new ContaBancaria({ saldo: 1250, numeroConta: "R2D2" })

// console.log(conta.numeroConta)           // "R2D2"
// console.log(conta.getSaldo)              // 1250

// Usando o setter para alterar o saldo
// conta.setSaldo = 1500

// console.log(`Saldo alterado: ${conta.getSaldo}`)  // 1500

// set setSaldo(value) {
// 	return this.#saldo = value
// }

// let conta = new ContaBancaria(1250, "R2D2")

// console.log(`saldo get: ${conta.setSaldo}`)

// conta.setSaldo = 150

// console.log(`saldo alterado pelo set: ${conta1,setSaldo}`)

// Continuação - Aula 5
// Alterando o valor do saldo

// class ContaBancaria {
//     #saldo
//     numeroConta
//     constructor(saldo, numeroConta) {
//         this.#saldo = saldo
//         this.numeroConta = numeroConta
//     }
// }
// let conta = new ContaBancaria(1250, "R2D2")
// console.log(`saldo get: ${conta.getSaldo}`)

// conta.getSaldo = -6

// console.log(`saldo alterado pelo set: ${conta.getSaldo}`)

// Herança 1 - Falando de Método

class Animal {
    fazerSom() {
        console.log("Emite um som genérico.")
    }
}

class Cachorro extends Animal {}

let dog = new Cachorro()
dog.fazerSom() // Emite um som genérico.

// Herança 2 - Falando de Mátodo

class Animal {
    fazerSom() {
        console.log("Emite um som genérico.")
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log("Au Au!") // Emição de um latido
    }
}

let dog = new Cachorro()
dog.fazerSom() // Emite um som genérico.

// Super (Classe Pai)

class Animal {
    nome
    constructor(nome){ // Definição do Construtor
        this.nome = nome
    }
    fazerSom() {  // Definição do Método - "fazerSom"
        console.log("Emite um som genérico.")
    }
}

class Cachorro extends Animal {
    constructor(nome) { // Construtor de "Cachorro" - Classe Filha
        super(nome)
    }
    fazerSom() {
        return "Au Au!" // Emição de um latido
    }
}

let dog = new Cachorro("Billy")  // Ele foi modificado para receber o nome
console.log(`O meu cachorro se chama ${dog.nome} e faz ${dog.fazerSom()}`)

// Poliformismo - Alteração de estrutura e forma

// Override - Sobrescrita (reescrita de um método)
// Overload - Sobrecarga (várias versões de um método) - Não tem em JavaScript

