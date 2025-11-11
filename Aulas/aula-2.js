// CONTINUAÇÃO DA AULA 1 - CONCEITOS MATEMÁTICOS

    // O ponto e vírgula (;) não é algo obrigatório na estrutura do código 

// OPERADORES LÓGICOS - BOOLEANOS

// ESTRUTURAS CONDICIONAIS - IF e ELSE
        let idade = 18;                         // Foi criado uma variável idade, para ser analisada

        if (idade >= 18) {                      // As chaves são indicadores de blocos de if e else, como os dois 
                                                   pontos (:)
            console.log("Maior de idade!");     // Primeira análise de valores
        } else {
            console.log("Menor de idade!");     // Última análise, caso o primeiro resultado não seja true
        }

// ESTRUTURAS CONDICIONAIS - INDICAÇÃO DO PROFESSOR (Erro!):
    let idade2 = 17;

    if (idade2 >= 18) {                     // Enxergou a variável idade e já a utilizou
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
        let teste = "teste"
        console.log(teste);
    }
    console.log(teste);                      // Só deu erro por causa do uso do let, ele não alcança fora
                                                do bloco que ele estava antes. 

// ESTRUTURAS CONDICIONAIS - INDICAÇÃO DO PROFESSOR (Correção!):
        // let idade2 = 17;

        // if (idade2 >= 18) {
        //     console.log("Maior de idade");
        // } else {
        //     console.log("Menor de idade");
        //     let teste = "teste"
        //     console.log(teste);
        // }
        // let teste = "Teste global"
        // console.log(teste)

// ESTRUTURAS CONDICIONAIS - ELSE IF:
        // let notas = 85;

        // if (notas >= 90) {
        //     console.log("Aprovado com A");
        // } else if (notas >= 70) {
        //     console.log("Aprovado com B");
        // } else {
        //     console.log("Reprovado!")
        // }





        // ESTRUTURAS CONDICIONAIS - ELSE IF - INDICAÇÃO DO PROFESSOR:
        // let nota = 45;

        // if (nota >= 90) {
        //     console.log("Aprovado com A");
        // } else if (nota >= 70) {
        //     console.log("Aprovado com B");
        // } else if (nota >= 50) {
        //     console.log("Aprovado com C")
        // } else if (nota >= 30) {
        //     console.log("Recuperação")
        // } else {
        //     console.log("Reprovado")
        // }

// ESTRUTURA CONDICIONAL - OPERADOR COM ?:
        // let iidade = 17;                                  // No do professor não tem essa parte, porque sem ela
        //                                                   // a execução da erro. 
        // let mensagem = iidade >= 18 ? "Adulto" : "Menor";
        // console.log(mensagem);

// INDICAÇÃO DE CÓDIGO DO PROFESSOR - CONDIÇÕES:
        // let a = 10
        // let b = 100

        // if (a != b) {
        //     console.log('São diferentes')
        // } else {
        //     console.log('São iguais')
        // }

// ESTRUTURAS CONDICIONAIS - SWITCH CASE (Melhor para indicações fixas):
        // let dia = 3

        // switch (dia) {
        //     case 1:
        //         console.log("Segunda")
        //         break                    // O break para a execução instantaneamente no código, para que os ou-
        //                                  // tros não apareçam. 
        //     case 2:
        //         console.log("Terça")
        //         break
        //     case 3:
        //         console.log('Quarta')
        //         break
        //     case 4:
        //         console.log('Quinta')
        //         break
        //     case 5:
        //         console.log('Sexta')
        //         break
        //     default:                       // Se ele é a última condição, não é necessário de um break
        //         console.log('Outro dia!')
        // }

//  ESTRUTURA DE REPETIÇÃO - FOR:
        // for (let i = 0; i < 5; i++) {   // Vai ser executado os números em sequência - i++ (adiciona 1 em i)
        //                                 // O i = 0 é o ponto de partida
        //                                 // O i é a letra mais usada, se precisar de outro é o j
        //     console.log(i)
        // }

// INDICAÇÃO DO PROFESSOR - ESTRUTURA DE REPETIÇÃO FOR:
        // let nomes = ['Celso', 'Daniel', 'Marlon']

        // for (let i = 0; i < 4; i++) {             // Irá iniciar no número 0, ele vai fazer a execução do 4 números indica-
        //                                           // dos anteriormente. Mas, vai dar como se o último número fosse indefi - 
        //                                           // nido, porque na lista não tem um valor até o quarto número. 
        //     console.log(nomes[i])
        // }

// CONTAGEM DE ITENS EM ESTRUTURA DE REPETIÇÃO:
        // let nome = ['Agatha', 'Lívia', 'Yasmin', 'Ana Katy']

        // for (let i = 0; i < nome.length; i++) {
        //     console.log(nome[i])
        // }

// ESTRUTURA FOR EACH:
        // let numeros = [1, 2, 3]
        // numeros.forEach(num => console.log(num))  // Primeiro ele vai ler cada um dos numeros, atribuir cada um
        //                                           // à num e a cada vez que ele ler o num ele vai executar.

// ESTRUTURA DE REPETIÇÃO WHILE (Quando tiver um certo limite):
        // let contador = 0

        // while (contador < 3 ) {     // Laço de repetição com um certo limite dentro do bloco. Para contar cada número que 
        //                             // foi adicionado até o momento, com um limite. 
        //     console.log(contador)
        //     contador++
        // }

// INDICAÇÃO DO PROFESSOR:
        // let contadore = 0 
        // while (contadore < 5) {
        //     console.log(`Contador: ${contadore}`)
        //     contadore++
        // }

// DO WHILE - Faça enquanto aquela condição ainda for aceita:
        // let num = 0
        // do {
        //     console.log(num)
        //     num++
        // } while (num < 3)    // Se for colocado uma linha do console.log ele irá adicionar mais ouro número, porque o 
        //                      // código não dará como finalizado até o while terminar. 

// ESTRUTURA DE LISTAS:

let lista = ["Banana", "Maçã", "Laranja"]
console.log(lista[0])  // Banana

lista.push("Uva")      // Adiciona esse iten ao final da lista
lista.pop()            // Remove o último
lista.unshift("Manga") // Adiciona ao início
lista.shift()          // Remove do início

console.log(lista.includes("Maçã"))   // true (Procura um item existente na lista)
console.log(lista.indexOf("Laranja")) // 2 (quantos itens tem antes do item)
console.log(lista.length)             // tamanho do array (lista)