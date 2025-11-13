// LISTA DE EXERCÍCIO JAVASCRIPT - Emanuely Macedo Padovan  //

//      EXERCÍCIO 1      //

// let a = 35
// let b = 43

// let soma = (a + b)
// console.log(soma)

//      EXERCÍCIO 2     //

// let base = 20
// let altura = 10

// let area = (base*altura)
// console.log(area)

//      EXERCÍCIO 3      //

// let celsius = 30

// let conversao = ((celsius * 9/5) + 32)
// console.log(conversao)

//      EXERCÍCIO 4      //

// let num1 = 10
// let num2 = 9
// let num3 = 8

// let media = ((num1 + num2 + num3)/3)
// console.log(media)

//           EXERCÍCIO 5

// let a = 3
// let b = 4

// let multiplicacao = (a * b)
// console.log(`A multiplicação entre ${a} x ${b} = ${multiplicacao}`)

//          EXERCÍCIO 6

// let num = -12

// if (num <= 1) {
//     console.log('O número é negativo!')
// } else if (num == 0){
//     console.log('O número é igual a zero!')
// } else {
//     console.log('O número é positivo!')
// }

//          EXERCÍCIO 7

// let idade = 12

// if (idade >= 18) {
//     console.log('Maior de idade!')
// } else {
//     console.log('Menor de idade!')
// }

//          EXERCÍCIO 8

// let num = 38

// if (num %2 == 0) {
//     console.log('O número é par!')
// } else {
//     console.log('O número é ímpar!')
// }

//           EXERCÍCIO 9

// let nota1 = 6
// let nota2 = 3

// let media = ((nota1 + nota2)/2)

// if (media >= 7) {
//     console.log('O aluno está aprovado!')
// } else {
//     console.log('O aluno está reprovado!')
// }

//          EXERCÍCIO 10

// let num1 = 300
// let num2 = 444
// let num3 = 1000

// if (num1 > num2 && num1 > num3) {
//     console.log('O primeiro número é o maior!')
// } else if (num2 > num3 && num2> num1) {
//     console.log('O segundo número é o maior!')
// } else {
//     console.log('O terceiro número é o maior!')
// }

//            EXERCÍCIO 11

// let idade = 63

// if (idade <= 11) {
//     console.log('Criança')
// } else if (idade <= 17) {
//     console.log('Adolescente')
// } else if (idade <= 59) {
//     console.log('Adulto')
// } else if (idade >= 60) {
//     console.log('Idoso')
// }

//              EXERCÍCIO 12

// let ano = 2022

// if (ano %4 == 0 && ano %100 != 0) {
//     console.log('É bissexto')
// } else if (ano %400 == 0) {
//     console.log('É bissexto')
// } else {
//     console.log('Não é bissexto')
// }

//          EXERCÍCIO 13 - Menu de operações

// let num1 = 0
// let num2 = 10

// let operacao = '/'

// switch (operacao) {
//     case '+':
//         let soma = (num1 + num2)
//         console.log(soma)
//         break
//     case '-':
//         let subtracao1 = (num1 - num2)
//         console.log(subtracao1)
//         break
//     case '*':
//         let multiplicacao = (num1 * num2)
//         console.log(multiplicacao)
//         break
//     case '/':
//         if (num2 !== 0) {
//             let divisao = (num1 / num2)
//             console.log(divisao)
//         } else {
//             console.log('Não é possível dividir por zero!')
//         }
//         break
// }

//        EXERCÍCIO 14

// let dia = 3

// switch (dia) {
//     case 1:
//         console.log("Domingo")
//         break
//     case 2:
//         console.log("Segunda")
//         break
//     case 3:
//         console.log('Terça')
//         break
//     case 4:
//         console.log('Quarta')
//         break
//     case 5:
//         console.log('Quinta')
//         break
//     case 6:
//         console.log('Sexta')
//         break
//     case 7:
//         console.log('Sábado')
//         break
//     default:
//         console,log('Não existe!')
// }

//      EXERCÍCIO 15

// let nota = 2

// if (nota >= 9) {
//     console.log('A')
// } else if (nota == 8) {
//     console.log('B')
// } else if (nota <= 7 && nota >= 6) {
//     console.log('C')
// } else if (nota <= 5 && nota >= 3) {
//     console.log('D')
// } else {
//     console.log('F')
// }

//      EXERCÍCIO 16

// for (let i = 0; i < 11; i++) {
// console.log(i)
// }

// EXERCÍCIO 17
// let soma = 0

// for(let i = 1; i <= 100; i++) {
//     soma += i
// }
// console.log(soma)

//       EXERCÍCIO 18       //

// let tabuada = 4

// for(let i = 0; i <= 10; i++) {
//     let multiplicacao = (tabuada * i)
//     console.log(`${tabuada} x ${i} = ${multiplicacao}`)
//}

//      EXERCÍCIO 19        //

// let contador = 10

// while(contador > 0) {
//     console.log(contador)
//     contador--
// }

// UTILIZANDO UM FOR //
for(let i = 10; i>0; i--){
    console.log(i)
}

//      EXERCÍCIO 20       //

// let numero = 1

// for(let i = 0; i <= 51; i++) {
//     if (i %2 == 0) {
//         console.log(i)
//     }
// }

//     EXERCÍCIO 21       // 

let numero = 1
let fatorial = 1

for(let i = 1; i <= numero; i++) {
    fatorial *= i
}
console.log(fatorial)

//     EXERCÍCIO 22      //

// let nomes = ['Lívia', 'Yasmin', 'Emanuely', 'Agatha', 'Ana Katy']

// for (let i = 0; i < 5; i++) {
//     console.log(nomes[i])
// }

//      EXERCÍCIO 23     //

let lista = [1, 2, 3, 4, 5]

for(let i = 0; i <= lista.length; i++) {
    if (lista[i] %2 == 0){
        console.log(lista[i])
    }
}

//     EXERCÍCIO 24       // 

// let lista = [1, 3, 78]
// let soma = 0

// for(let i = 0; i < lista.length; i++) {
//     soma += lista[i]
// }
// console.log(soma)

//     EXERCÍCIO 25     //

// const numeros = [11, 10, 98, 100, 1200]

// let maiorNumero = numeros[0]

// for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] > maiorNumero){
//         maiorNumero = numeros[i]
//     }
// }

// console.log(maiorNumero)

//     EXERCÍCIO 26     //

// let lista = ["Emanuely", "Lívia", "Agatha", "Elisa"]
// console.log(lista.includes("Maçã")) 

//     EXERCÍCIO 27     // 

// let lista1 = ["Letícia", "Emanuely", "Enzo"]
// lista1.push("Gustavo")
// console.log(lista1)

//     EXERCÍCIO 28     // 

// let lista2 = ["Parmegiana", "Frango", "Galinha"]
// lista2.pop()
// console.log(lista2)
