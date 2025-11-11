//           AULA 3 - INÍCIO DAS AULAS SOBRE FUNÇÕES                 //

// Um bloco de código que pode ser chamado mais de uma vez no código

//              ESTRUTURA BÁSICO DE CONSTRUÇÃO                      //

// function nomeDaFuncao(parametro1, parametro2) {
//     // corpo da função
//     return resultado
// }

//              PARÂMETROS E ARGUMENTOS - INTRODUÇÃO                //

// function somar1(a,b) {      // Para marcar que os dois valores podem ser chamados depois
//     return a + b           // Conta que vai ser executada
// }
// let resultado = somar1(5,1) // "Substituição" dos valores anteriores para valores numéricos
// console.log(resultado)

// - OUTRA FORMA

// function somar2(a,b) {
//     return a + b
// }
// console.log(somar2(4,3))

//                     FUNÇÕES DECLARADAS                          //

// console.log(`O resultado da soma é: ${soma3(5, 5)}`)

// function soma3(a, b) {
//     return a + b
// }

//                     FUNÇÕES EXPRESSAS                           //

// const soma4 = function (a, b) {
//     return a + b
// }
// result = soma4(4,4)
// console.log(`O resultado da soma é ${result}`)

//  - PARA DAR ERRADO:

// console.log(`O resultado da soma é ${result}`)
// const soma4 = function (a, b) {
//     return a + b
// }
// result = soma4(4,4)

//                   FUNÇÕES ANÔNIMAS                                //

// soma = function(a,b) {     // função sem nome 
//     return a + b           // se tivesse no início ela seria nomeada
// }
// console.log(`O resultado da soma é: ${soma(2,3)}`)

//                       ARROW FUNCTION                               //

// let soma = (a, b) => {return a + b}
// console.log(`O resultado da soma é: ${soma(7,7)}`)

//                     ARROW IMEDIATAS IIFE                          //

// (function(){
//     return console.log('Hello World!')
// })()

//                     FUNÇÕES CALLBACK                              //

// function executarOperacao(a, b, callback) {    // obedece ao que lhe foi solicitado dependendo de qual é a função que você chamou.
//     return callback(a, b)
// }

// function soma(x, y) {
//     return x + y
// }

// function multiplicacao(x, y) {
//     return x * y
// }

// console.log(executarOperacao(2, 3, soma))
// console.log(executarOperacao(2, 3, multiplicacao))

//                 FUNÇÕES RECURSIVAS                               //

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

// console.log(fatorial(1))

//                  FUNÇÕES ASSÍNCRONAS                            //

// async function buscarDados() {
//     console.log('Iniciando a busca...')

//     const resposta = await fetch ("https://viacep.com.br/ws/13322288/json/")  // 18275243
//     const dados = await resposta.json()

//     console.log('Dados recebidos: ', dados)
// }

// buscarDados()
// console.log("Essa mensagem aparece antes da resposta da API!")