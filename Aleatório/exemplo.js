
class Pai {
    constructor(nome) {
        this.nome = nome
        let nomePai = this.nomePai
        this.Filho = class {
            constructor(idade) {this.idade = idade}
            apresentar() {return `Pai: ${nomePai} - Idade do filho: ${this.idade}`}
        }
    }
    criarFilho(idade) {
        return new this.Filho(idade)
    }
}

// Uso
let father = new Pai ('José Teixeira')
let daugther = father.criarFilho(17) 
console.log(daugther.apresentar()) // Pai: José Teixeira - Idade da filha: 17

let father2 = new Pai('José Teixeira')
let daugther2 = father2.criarFilho(11)
console.log(daugther2.apresentar()) // Pai: José Teixeira - Idade da filha: 11

