//  LISTA DE FUNÇÕES - EMANUELY MACEDO PADOVAN

// 1. Função declarada que receba dois números como parâmetros e retorne a soma deles.

// function soma(a,b) {
//     return a + b
// }
// let resultado = soma(3,5)
// console.log(resultado)

// 2. Função declarada que receba três notas e retorne a média do aluno.

// function media(n1, n2, n3) {
//     return (n1 + n2 + n3)/ 3
// }
// let resultado1 = media(4, 7, 10)
// console.log(resultado1)

// 3. Função expressa que receba a base e a altura de um triângulo e retorne a área.

// const area = function(base, altura) {
//     return (base * altura)/ 2
// }
// resultado = area(14, 7)
// console.log(`A área do triângulo é: ${resultado}`)

// 4. Função anônima que receba um número e retorne se ele é par ou ímpar.

// parImpar = function(num) {
//     if (num %2 == 0) {
//         return "Par"
//     } else {
//         return "Ímpar"
//     }
// }
// console.log(`O número é ${parImpar(13)}`)

// 5. Arrow function que receba dois números e retorne o maior deles.

// let maior = (a, b) => {
//     if (a > b) {
//         return a
//     } else {
//         return b
//     }
// }
// console.log(`O maior número é: ${maior(56, 203)}`)

// 6. Arrow function que receba um array de números e retorne apenas os números pares.

// const parLista = (array) => {
//     let lista = [ ]
//     for(let i = 0; i <= array.length; i++) {
//         if (array[i] %2 == 0) {
//             lista.push(array[i])
//     }
// }
// return lista
// }
// console.log(`O(s) número(s) que são pares na lista é: ${parLista([1, 2, 3, 4])}`)

// 6. Arrow function que receba um array de números e retorne apenas os números pares (2).

// const pares = (numeros) => {
//     if(numeros %2 == 0){
//         return console.log(numeros)
//     }
// }
// let lista = [1, 2, 3, 4, 5]
// for(let i = 0; i < lista.length; i++){
//     pares(lista[i])
// }

// 7. Função IIFE que exiba no console a mensagem: .

// (function(){
//     return console.log(".")
// })()

// 8. Função IIFE que calcule o quadrado de um número e exiba o resultado imediatamente.

// (function(a){
//     let resultado = (a * a)
//      return console.log(`O quadrado do número é: ${resultado}`)
// })(5)

// 9. Função que receba um nome e uma função callback, e execute a callback exibindo uma mensagem de boas-vindas personalizada.

// function boasVindas(nome, callback) {
//     callback(nome)
// }
// function mensagem(n) {
//     console.log(`Olá ${n}, seja bem-vindo!`)
// }
// boasVindas('Manu', mensagem)

// 10. Função que receba um array de números e uma função callback. A função deve aplicar o callback em cada elemento e retornar um novo array com o dobro do valor. 

// function dobro(array, callback) {
//     let novoArray = [ ]
//     for (i = 0; i < array.length; i++) {
//         novoArray.push(callback(array[i]))
//     }
//     return novoArray
// }
// function dobrar(num){
//     return num * 2
// }
// console.log(dobro([2, 76, 56, 1, 1, 8], dobrar))

// 11. Função recursiva que exiba no console os números de 10 até 1 em ordem decrescente. 

// let n = 10
// function regresso(n){
//     while (n > 0){
//         console.log(n)
//         n -= 1
//     }
// }
// regresso(10)

function decrescente(n){
    if (n > 0){
        console.log(n)
        descrecentes
    }
}

// 12. Função assíncrona que aguarde 2 segundos e depois exiba no console: .

// async function esperar(){
//     setTimeout(() => {console.log(".")}, 2000)
// }
// esperar()

// 13. Função assíncrona que receba um númeor, aguarde 1 segundo e depois retorne o dobro desse número. 

// let num = 5
// async function dobro(){
//     setTimeout(() => {console.log(num * 2)}, 1000)
// }
// dobro()

// 14. Função assíncrona que simule a consulta de um usuário em um sistema e exiba a mensagem: após 3 segundos. 

// async function mensagem() {
//     setTimeout(() => {console.log("Após 3 segundos.")}, 3000)
// }
// mensagem()