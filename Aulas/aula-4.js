// AULA 4 - POO

// PARADIGMA IMPERATIVO

// let contador = 0
// contador += 1
// console.log(contador)

// PARADIGMA DECLARATIVO

// PARADIGMA FUNCIONAL

// const soma = (a, b) => a + b
// const dobro = (x) => x * 2

// const resultado = dobro(soma(2,3))
// console.log(resultado)

// PARADIGMA ORIENTADO A OBJETOS

// OBJETO LITERAL

// const pessoa = {
//     nome: "Jurema",
//     idade: 30,
//     falar: function(){
//         console.log(`Olá, meu nome é ${this.nome}`)
//     }
// }
// pessoa.falar()

// OBJETO INSTANCIADO 


// CLASSE 

class Pessoa {}

// CONSTRUTOR

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
}
}