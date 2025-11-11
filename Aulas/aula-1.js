//AULA 1 - CONCEITOS INTRODUTÓRIOS DE CODIFICAÇÃO

// UTILIZAÇÃO DO "CONSOLE.LOG" PARA CHAMAR INFORMAÇÕES DE VARIÁVEIS
console.log("Olá, Back-End!");

// UTILIZAÇÃO DE VARIÁVEL ATRAVÉS DO "VAR" - Inteiro
var nome = "Emanuely!"
console.log(nome)

// UTILIZAÇÃO DE VARIÁVEL ATRAVÉS DO "LET" - Pode ser reatribuido e não fica disponível ao código inteiro
let idade = 25;
idade = 16;
console.log(idade)

// UTILIZAÇÃO DE VARIÁVEL ATRAVÉS DO "CONST" - Não pode ser reatribuido e é preciso iniciá-lo na hora
const PI = 3.14
console.log(PI)

// NOMEAÇÃO DE VARIÁVEIS - camelCase
//   É necessário quando criado uma variável muito longa.
    inicioVariável

// INDICAÇÃO DE LINHA DO PROFESSOR - IMPORTÂNCIA DE DECLARAR A VARIÁVEL QUE FOI CRIADA

// ITENS DE CRIAÇÃO DE ERRO DE LÓGICA

    var nome;
    let idade;

    console.log(nome);
    console.log(idade);

    const cidade;
    const cidade = "SP";
    cidade = "RJ";

// UTILIZAÇÃO DA VARIÁVEL "LET" - PARTE2 (DECLARAÇÃO DE CASE)
let nomeCompleto = "Emanuely Macedo Padovan";
console.log(nomeCompleto)

// DADOS - PRIMITIVOS
let texto = "Olá!"; //string
let numero = 42; //Number
let booleano = true; //Boolean
let nulo = null; //Null
let indefinido; //Undefined

console.log(texto, numero, booleano, nulo, indefinido);

console.log(typeof texto, numero, booleano, nulo, indefinido); // Definição do tipo de dado que ele tem armazenado

// INDICAÇÃO DE LINHA DE CÓDIGO DO PROFESSOR (Deu errado!)
    // let texto = 'Olá';
    // let num1 = 10;
    // let num2 = '20';
    // let verdadeiro = true;

    // console.log(typeof texto);
    // console.log(typeof num1);
    // console.log(typeof num2);
    // console.log(typeof verdadeiro);

// DADOS - ESTRUTURAS 
let listas = [1, 2, 3]; // Array
let pessoas = {nome: "Carlos", idade: 28}; //Objeto

function saudacao(nome) { //Declaração de função
    return `Olá, ${nome}`; //Instrução
}
console.log(saudacao("Maria")) //Chama a função

// INDICAÇÃO DE LISTA - ESTRUTURA DE DADOS
let lista = ['Banana', 'Maçã', 'Laranja'];
let pessoa = {nome: 'Emanuely', idade: 16};

function saudacao(nome){
    return `Olá, ${nome}`;
}
console.log(saudacao('Emanuely'));
console.log(pessoa.nome, pessoa.idade);
console.log(lista);
console.log(lista[2]);