// Lista 4 - Herança, Encapsulamento e Polimorfismo
// Emanuely Macedo Padovan

// Herança

// 1. Instrumento Musical

// class InstrumentoMusical {
//     tocar() {
//         return "Som genérico"
//     }
// }

// class Violao extends InstrumentoMusical {
//     tocar() {
//         return "Mi Lá Ré Sol Si Mi"
//     }
// }

// class Piano extends InstrumentoMusical {
//     tocar() {
//         return "Dô Rê Mi Fá Sol Lá Si Dó Ré"
//     }
// }

// let guitar = new Violao()
// let piano = new Piano()

// console.log(`O Violão emite: ${guitar.tocar()}`)
// console.log(`O Piano emite: ${piano.tocar()}`)


// 2. Empresa

// class Funcionario1 {
//     constructor (nome, salario) {
//         this.nome = nome
//         this.salario = salario
//     }
// }

// class Gerente1 extends Funcionario1 {
//     constructor(nome, salario, bonus) {
//         super(nome, salario)
//         this.bonus = bonus
//     }
//     calcularSalario() {
//         return this.salario + this.bonus
//     }
// }

// let employee = new Funcionario1 ("Yasmin Vitória do Nascimento Ramos", 14549)
// let manager = new Gerente1 ("Celso Rodrigues", 49056, 2000)

// console.log(`O funcionário ${employee.nome}, recebe R$${employee.salario} por mês.`)
// console.log(`O Gerente ${manager.nome}, recebe R$${manager.calcularSalario()} por mês.`)

// 3. Veículos

// class Veiculos {
//     constructor (marca, ano) {
//         this.marca = marca
//         this.ano = ano
//     }
// }

// class Carro extends Veiculos {
//     constructor(marca, ano, portas) {
//         super(marca, ano)
//         this.portas = portas
//     }
// }

// class Moto extends Veiculos {
//     constructor(marca, ano, cilindradas) {
//         super(marca, ano)
//         this.cilindradas = cilindradas
//     }
// }

// let car = new Carro("Toyota", 2014, 4)
// let motorcycle = new Moto("BMW", 2025, 313)

// console.log(`Carro - Marca: ${car.marca}; - Ano: ${car.ano}; - Portas: ${car.portas}.`)
// console.log(`Moto - Marca: ${motorcycle.marca}; - Ano: ${motorcycle.ano}; - Cilindradas: ${motorcycle.cilindradas}cc.`)

// 4. Salário

// class Funcionario {
//     constructor(salario) {
//         this.salario = salario
//     }
//     calcularSalario() {
//         return this.salario
//     }
// }

// class Gerente extends Funcionario {
//     calcularSalario() {
//         return this.salario * 1.3
//     }
// }

// class Desenvolvedor extends Funcionario {
//     calcularSalario() {
//         return this.salario * 1.2
//     }
// }

// let manager1 = new Gerente(15600)
// let developer = new Desenvolvedor(5690)

// console.log(`Gerente: ${manager1.calcularSalario()}`)
// console.log(`Desenvolvedor: ${developer.calcularSalario()}`)

// 5. Conta Bancária

// class ContaBancaria {
//     constructor(titular, saldo) {
//         this.titular = titular
//         this.saldo = saldo
//     }
//     depositar(quantidade) {
//         this.saldo += quantidade
//     }
//     sacar(quantidade) {
//         this.saldo -= quantidade
//     }
// }

// class ContaCorrente extends ContaBancaria {
//     sacar(quantidade) {
//         this.saldo -= (quantidade + 2)
//     }
// }

// class ContaPoupança extends ContaBancaria {
//     atualizarSaldo() {
//         this.saldo *= 1.05
//     }
// }

// let poupanca = new ContaPoupança ("Jorge", 1200)
// let corrente = new ContaCorrente ("Camila", 1245)

// corrente.sacar(10)
// poupanca.atualizarSaldo()

// console.log(`Conta Corrente: R$${corrente.saldo}`)
// console.log(`Poupança: R$${poupanca.saldo}`)


// Encapsulamento

// 6. Produtos

// class Produto {
//     #nome
//     #preco

//     constructor(nome, preco) {
//         this.#nome = nome
//         this.#preco = preco
//     }
//     get getNome() {
//         return this.#nome
//     }
//     get getPreco() {
//         return this.#preco
//     }
//     set setNome(valor) {
//         return this.#nome = valor
//     }
//     set setPreco(valor) {
//         if (valor < 0) {
//             console.log("O preço não pode ser negativo!")
//             return
//         }
//         this.#preco = valor
//     }
// }

// Teste
// let produto = new Produto("Computador", 12500)
// console.log(produto.getNome)
// console.log(produto.getPreco)

// Teste de Setter
// produto.setNome = "Mouse"
// console.log(produto.getNome)

// produto.setPreco = 25
// console.log(produto.getPreco)

// Teste de Preço Negativo
// produto.setPreco = -50
// console.log(produto.getPreco)

// 7. Carro

class Carro1 {
    #velocidade = 0

    acelerar() {
        this.#velocidade += 10
        return this.#velocidade
    }

    frear() {
        if (this.#velocidade >= 10) {
            this.#velocidade -= 10
            return this.#velocidade
        }
        return "Não é possível frear mais do que isso!"
    }
}

let carro2 = new Carro1()
console.log(`Velocidade: ${carro2.acelerar()} km/h`)
console.log(`Velocidade: ${carro2.acelerar()} km/h`)
console.log(`Velocidade: ${carro2.acelerar()} km/h`)

console.log(`Velocidade: ${carro2.frear()} km/h`)
console.log(`Velocidade: ${carro2.frear()} km/h`)
console.log(`Velocidade: ${carro2.frear()} km/h`)
console.log(`Velocidade: ${carro2.frear()}`)


// 8. Conta

// class Conta {
//     #saldo = 0

//     depositar(valor) {
//         if (valor <= 0) {
//             console.log("Não é possível depositar valores negativos!")
//             return this.#saldo
//         } else {
//             this.#saldo += valor
//             return this.#saldo
//         }
//     }
//     sacar(valor) {
//         if (valor > this.#saldo) {
//             console.log("Saldo Insuficiente!")
//             return this.#saldo
//         } else {
//             this.#saldo -= valor
//             return this.#saldo
//         }
//     }
//     getSaldo() {
//         return this.#saldo
//     }
// }

// let conta = new Conta()
// console.log(`Depósito: ${conta.depositar(10)}`) // 10
// console.log(`Saque: ${conta.sacar(5)}`) // 5

// Erro
// console.log(`Depósito: ${conta.depositar(-10)}`) // Não é possível depositar valores
//                                   // Saldo continua 5
// console.log(`Saque: ${conta.sacar(20)}`) // Saldo Insuficiente e continua 5

// Saldo da Conta
// console.log(`Saldo: ${conta.getSaldo()}`) // 5

// 9. Usuário

// class Usuario {
//     #senha
//     constructor(senha){
//         this.#senha = senha
//     }
//     validarSenha(senhaDigitada){
//         return senhaDigitada == this.#senha
//     }
// }

// let user = new Usuario("1234")
// console.log(user.validarSenha("1234"))
// console.log(user.validarSenha("1432"))

// 10. Retângulo

// class Retangulo {
//     #largura
//     #altura
//     constructor(largura, altura) {
//         this.#largura = largura
//         this.#altura = altura
//     }
//     get getArea() {
//         return this.#altura * this.#largura
//     }
//     get getPerimetro() {
//         return (this.#altura + this.#largura)*2
//     }
// }

// let retangulo = new Retangulo(12, 14)
// console.log(`Área: ${retangulo.getArea}`)
// console.log(`Perímetro: ${retangulo.getPerimetro}`)

// Polimorfismo

// 11. Forma

// class Forma {
//     calcularArea(){
//         return "Cálculo de Área"
//     }
// }

// class Quadrado extends Forma{
//     constructor(lado) {
//         super()
//         this.lado = lado
//     }
//     calcularArea(){
//         return this.lado * this.lado
//     }
// }

// class Retangulo2 extends Forma{
//     constructor(altura, largura) {
//         super()
//         this.largura = largura
//         this.altura = altura
//     }
//     calcularArea(){
//         return this.altura * this.largura
//     }
// }

// class Circulo extends Forma{
//     constructor(raio){
//         super()
//         this.raio = raio
//     }
//     calcularArea(){
//         return 3.14 * (this.raio**2)
//     }
// }

// let quadrado1 = new Quadrado(12)
// let retangulo1 = new Retangulo2(12, 14)
// let circulo1 = new Circulo(2)

// console.log(`Quadrado: ${quadrado1.calcularArea()}`)
// console.log(`Retângulo: ${retangulo1.calcularArea()}`)
// console.log(`Círculo: ${circulo1.calcularArea()}`)

// 12. Funcionário

// class Funcionario2 {
//     trabalhar() {
//         return "Definição de Funções"
//     }
// }

// class Professor extends Funcionario2 {
//     trabalhar() {
//         return "Ministrando aulas e corrigindo provas."
//     }
// }

// class Engenheiro extends Funcionario2 {
//     trabalhar() {
//         return "Desenvolvendo projetos e supervisionando obras."
//     }
// }

// class Designer extends Funcionario2 {
//     trabalhar() {
//         return "Criando layouts e materiais gráficos."
//     }
// }

// let professor1 = new Professor()
// let engenheiro1 = new Engenheiro()
// let designer1 = new Designer()

// console.log(`Professor: ${professor1.trabalhar()}`)
// console.log(`Engenheiro: ${engenheiro1.trabalhar()}`)
// console.log(`Designer: ${designer1.trabalhar()}`)

// 13. Pagamento

// class Pagamento {
//     realizarPagamento() {
//         return "Forma de Pagamento"
//     }
// }

// class CartaoCredito extends Pagamento {
//     realizarPagamento() {
//         return "A forma de pagamento foi: Cartão de Crédito"
//     }
// }

// class Boleto extends Pagamento {
//     realizarPagamento() {
//         return "A forma de pagamento foi: Boleto"
//     }
// }

// class Pix extends Pagamento {
//     realizarPagamento() {
//         return "A forma de pagamento foi: Pix"
//     }
// }

// let compra1 = new CartaoCredito()
// let compra2 = new Boleto()
// let compra3 = new Pix()

// console.log(`Comprei um celular. ${compra1.realizarPagamento()}`)
// console.log(`Paguei as minhas contas. ${compra2.realizarPagamento()}`)
// console.log(`Recarreguei a minha internet. ${compra3.realizarPagamento()}`)

// 14. Transporte

class Transporte {
    mover() {
        return "Onde cada transporte se movimenta?"
    }
}

class Carro3 extends Transporte {
    mover() {
        return "O carro anda pela estrada."
    }
}

class Bicicleta extends Transporte {
    mover() {
        return "A bicicleta anda pela calçada."
    }
}

class Aviao extends Transporte {
    mover() {
        return "O avião voa pelo céu."
    }
}

let carro = new Carro3()
let bicicleta1 = new Bicicleta()
let aviao1 = new Aviao()

console.log(carro.mover())
console.log(bicicleta1.mover())
console.log(aviao1.mover())

// 15. Mensagem

// class Mensagem {
//     enviar(){
//         return "Envio de Mensagens, por diferentes meios de comunicação"
//     }
// }

// class Email extends Mensagem {
//     enviar() {
//         return "Querida amiga, gostaria que conhecesse a mais nova integrante da fazenda: a Jurema. Ela é uma galinha americana, que veio diretamente de Boston. Aguardamos ansiosamente pela sua vinda! Beijos, Manu"
//     }
// }

// class SMS extends Mensagem {
//     enviar() {
//         return "Parabéns pela conquista! Agora, vamos continuar o processo de resgaste?"
//     }
// }

// class WhatsApp extends Mensagem {
//     enviar() {
//         return "Oie, você vai poder sair esse final de semana?"
//     }
// }

// let email = new Email()
// let sms = new SMS()
// let whatsapp = new WhatsApp()

// console.log(`Email: ${email.enviar()}`)
// console.log(`SMS: ${sms.enviar()}`)
// console.log(`WhatsApp: ${whatsapp.enviar()}`)