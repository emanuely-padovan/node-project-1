//  LISTA DE ORIENTAÇÃO À OBJETOS - EMANUELY MACEDO PADOVAN

// 1. Classe Produto

class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }
    calcularEstoque(){
        let calculo = this.preco * this.quantidade
        return calculo
    }
}
const produto1 = new Produto("Pera", 12.90, 40)
produto1.calcularEstoque()
console.log(`O valor total dos produtos em estoque é ${produto1.calcularEstoque()}`)

// 2. Classe Filme

class Filme{
    constructor(titulo, diretor, lancamento){
        this.titulo = titulo
        this.diretor = diretor
        this.lancamento = lancamento
    }

    apresentacao(){
        return `O filme ${this.titulo} foi lançado em ${this.lancamento} e dirigido por ${this.diretor}.`
    }
}
const filme1 = new Filme("Interestelar", "Christoper Nolan", 2014)

filme1.apresentacao()
console.log(filme1.apresentacao())

// 3. Classe Aluno

class Aluno{
    constructor(nome, nota1, nota2){
        this.nome = nome
        this.nota1 = nota1
        this.nota2 = nota2
    }
    calcularMedia(){
        let media = (this.nota1 + this.nota2)/2
        return media
    }
    verificar(){
        let media = this.calcularMedia()
        if (media >= 7) {
            return `O aluno ${this.nome} está aprovado!`
        } else {
            return `O aluno ${this.nome} não passou!`
        }
    }
}
const aluno1 = new Aluno("Lívia Hermano", 10, 9)
aluno1.verificar()
console.log(aluno1.verificar())

// 4. Classe Retângulo

// class Retangulo{
//     constructor(base, altura){
//         this.base = base
//         this.altura = altura
//     }
//     calcularArea(){
//         let area = (this.base * this.altura)
//         return area
//     }
//     calcularPerimetro(){
//         let perimetro = (this.base * 2) + (this.altura * 2)
//         return perimetro
//     }
// }
// const retangulo1 = new Retangulo(12,6)
// retangulo1.calcularArea()
// retangulo1.calcularPerimetro()

// console.log(`O retângulo possui ${retangulo1.calcularArea()} de área e ${retangulo1.calcularPerimetro()} de perímetro.`)

// 5. Classe Carro

// class Carro{
//     constructor(marca, modelo, combustivel){
//         this.marca = marca
//         this.modelo = modelo
//         this.combustivel = combustivel
//     }
//     abastecer(litros){
//         this.combustivel += litros
//     }
//     dirigir(km){
//         this.combustivel += (km / 10)
//     }
// }
// const carro1 = new Carro("Caoa", "Chery QQ", 15)
// carro1.abastecer(12)
// console.log(carro1.combustivel)

// carro1.dirigir(40)
// console.log(carro1.combustivel)


// 5. Classe Carro - Outra alteração (incompleto!)

class Carro{
    constructor(marca, modelo, combustivel){
        this.marca = marca
        this.modelo = modelo
        this.combustivel = combustivel
    }
    abastecer(litros){
        this.combustivel += litros
    }
    dirigir(km){
        if (this.combustivel < km/10) {
            return "Combustível não suficiente."
        } else {

        }
        this.combustivel += (km / 10)
    }
}
const carro1 = new Carro("Caoa", "Chery QQ", 15)
carro1.abastecer(12)
console.log(carro1.combustivel)

carro1.dirigir(40)
console.log(carro1.combustivel)