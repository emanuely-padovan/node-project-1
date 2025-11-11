
// Criação de uma classe abstrata - não pode ser "chamada" para criar um objeto
class Veiculo {
    constructor(marca) {
        // Utilização do new.target, para "impedir" a criação (simulação)
        if (new.target == Veiculo) {
            throw new Error ("Não é permitido concretizar a classe 'Forma'")
        }
        this.marca = marca // Todas as Formas teram essa propriedade
    }
    // Método que deve "repetir" nas classes filhas
    velocidade() {
        return "O método deve estar em todas as subclasses"
    }
}

// Classe Filha 1 
class Carro extends Veiculo {
    constructor (marca, km) {
        super(marca) // Chama o construtor da classe pai
        this.km = km
    }
    // Método que deve se repetir
    velocidade() {
        return this.km += 10
    }
}

// Classe Filha 2
class Moto extends Veiculo {
    constructor(marca, km) {
        super(marca)
        this.km = km
    }
    velocidade() {
        return this.km += 10
    }
}

// Utilizando as classes filhas
let car = new Carro("BMW", 10)
let motorcycle = new Moto("Honda", 10)

console.log(`Carro: ${car.velocidade()}`)
console.log(`Moto: ${motorcycle.velocidade()}`)

// Erro
let forma = new Forma("Rosa")


// Estrutura Base
let objeto = new (class{
    constructor(informacao) {
        this.informacao = informacao
    }
    mostrar() {
        return `Informação: ${this.informacao}`
    }
})("Dado")

console.log(objeto.mostrar())


// Criação de um objeto direto de uma clase anônima
let carro = new (class{ // criação de uma classe diretamente do objeto
    constructor(marca, modelo){ // Elementos normais de uma classe e seu construtor
        this. marca = marca
        this.modelo = modelo
    }
    mostrarInformacoes() { // As informações de forma conjunta para aparecerem no final
        return `Carro: ${this.marca} ${this.modelo}`
    }
})("BMW", "X4 M4Oi 2023") // Denominação de cada elemento já é feita depois de "finalizar" a classe

console.log(carro.mostrarInformacoes())