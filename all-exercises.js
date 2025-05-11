const prompt = require('prompt-sync')()

//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
let numberInteiro = Number(prompt("Insira um número para verificar se ele é PAR ou ÍMPAR: "))

if(isNaN(numberInteiro)){
    console.log('Erro: Digite um número válido, por favor!')
}else if(numberInteiro % 2 === 0){
    console.log(`O número ${numberInteiro} é PAR!`)
}else{
    console.log(`O número ${numberInteiro} é ÍMPAR!`)
}

//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
let idade = Number(prompt('Digite a sua idade: '))

if((idade >= 2) && (idade <= 12)){
    console.log('Você é CRIANÇA!')
}else if((idade >= 13) && idade <=17){
    console.log('Você é ADOLESCENTE!')
}else if((idade >= 18) && (idade <= 59)){
    console.log('Você é ADULTO!')
}else if(idade >= 60){
    console.log('Você é IDOSO!')
}else{
    console.log('Erro: Por favor digite um número válido!')
}

//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
let nota = Number(prompt('Digite uma nota de 0 a 10: '))

let media = 5

if(isNaN(nota) || nota < 0 || nota > 10){
    console.log('Erro: Por favor, digite um número inteiro de 0 a 10!')
}else if(nota > media){
    console.log(`O(a) aluno(a) que tirou a nota ${nota} está APROVADO!`)
}else if(nota === media){
    console.log(`O(a) aluno(a) que tirou a nota ${nota} está em RECUPERAÇÃO!`)
}else{
    console.log(`O(a) aluno(a) que tirou a nota ${nota} está REPROVADO!`)
}

//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
console.log(`
Escolha uma das três opções de tinta para pintar o seu quarto:
1 - Roxo
2 - Azul
3 - Preto
`)

const menu = Number(prompt(`Digite o número da opção desejada: `))

if(isNaN(menu)){
    console.log('Erro: Por favor, digite um número válido de 1 a 3!')
}else{
    switch(menu){
        case 1:
            console.log('Você vai pintar o seu quarto com a tinta ROXA!')
            break
        case 2:
            console.log('Você vai pintar o seu quarto com a tinta AZUL!')
            break
        case 3:
            console.log('Você vai pintar o seu quarto com a tinta PRETA!')
            break
        default:
            console.log('Por favor, selecione uma opção de tinta válida!')
            break
    }
}

//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
//IMC peso (kg) / (altura (m) * altura (m))
//JavaScript não le entradas de usuarios que tenham ',' por isso utilizamos 'replace'
let altura = parseFloat(prompt('Por favor, digite a sua altura: ').replace(',', '.'))
let peso = parseFloat(prompt('Por favor, digite o seu peso: ').replace(',', '.'))

let IMC = peso/(altura * altura)

//toFixed(2) formata o resultado para duas casas decimais, como 24.21.
console.log(`O seu IMC é ${IMC.toFixed(2)}`)

if(IMC < 18.5){
    console.log(`O seu Índice de Massa Corporal (IMC) está na categoria: Baixo peso!`)
}else if(IMC < 24.9){
    console.log(`O seu Índice de Massa Corporal (IMC) está na categoria: Peso normal!`)
}else if(IMC < 29.9){
    console.log(`O seu Índice de Massa Corporal (IMC) está na categoria: Sobrepeso!`)
}else if(IMC < 39.9){
    console.log(`O seu Índice de Massa Corporal (IMC) está na categoria: Obesidade!`)
}else{
    console.log(`O seu Índice de Massa Corporal (IMC) está na categoria: Obesidade grave!`)
}

//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
let ladoA = Number(prompt('Digite um número inteiro para o lado A do triângulo: ')) 
let ladoB = Number(prompt('Digite um número inteiro para o lado B do triângulo: '))
let ladoC = Number(prompt('Digite um número inteiro para o lado C do triângulo: '))

if((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)){
    console.log('Os lados fornecidos formam um triângulo!')

    if((ladoA == ladoB) && (ladoB == ladoC)){
        console.log('Todos os lados iguais formam um Triângulo Equilátero!')
    }else if((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)){
        console.log('Os dois lados iguais formam um Triângulo Isósceles!')
    }else{
        console.log('Todos os lados diferentes formam um Triângulo Escaleno!')
    }

}else{
    console.log('Os lados fornecidos não formam um triângulo!')
}

//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
let qtdMacas = Number(prompt('Quantas maçãs você comprou? '))
let totCompra = 0

if(isNaN(qtdMacas) || qtdMacas <= 0){
    console.log('Erro: Por favor digite um número válido e positivo para realizar o cálculo da sua compra de maçãs!')
}else if(qtdMacas >= 12){
    totCompra = (qtdMacas*0.25)
    console.log(`Total da sua compra de ${qtdMacas} maçãs com desconto: R$ ${totCompra.toFixed(2)}`)
}else{
    totCompra = (qtdMacas*0.30)
    console.log(`Total da sua compra de ${qtdMacas} maçãs sem desconto: R$ ${totCompra.toFixed(2)}`)
}

//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
let numberFirst = Number(prompt('Digite o primeiro número: '))
let numberSecond = Number(prompt('Digite o segundo número: '))


if (isNaN(numberFirst) || isNaN(numberSecond)) {
    console.log('Erro: Digite um número inteiro, por favor!')
}else if(numberFirst === numberSecond){
    console.log('Por favor, digite números diferentes!')
}else{
    let numeros = [numberFirst, numberSecond]
    numeros.sort((a, b) => a - b)
    console.log(`Ordem crescente: ${numeros[0]}, ${numeros[1]}`)
}

//9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.
for(let cont = 10; cont >= 1; cont--){
    console.log(cont)
}
    console.log('Contagem regressiva finalizada!')

//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
let numberInt = Number(prompt('Digite um número inteiro: '))

for(let numb = 1; numb <= 10; numb++){
    console.log(`${numb}ª vez: ${numberInt}`)
}

console.log('Repetição finalizada!')

//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
let soma5 = 0
let numUser = [] //array para guardar os números

for(let numb = 1; numb <= 5; numb++){
    let number = Number(prompt('Digite um número: '))
    numUser.push(number);  //adiciona o número ao array
    soma5 += number
}
console.log(`Os números digitados foram: ${numUser.join(', ')}`); //transforma o array em uma string separada por vírgulas
console.log(`A soma dos números é: ${soma5}`)

//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
let numberTab = Number(prompt('Digite um número de 1 a 10 para exibir a tabuada: '))

if(numberTab >= 1 && numberTab <= 10){
    console.log(`\nA tabuada do número ${numberTab} é: `)
    for(let i = 1; i <= 10; i++){ 
        console.log(`${numberTab} x ${i} é: ${numberTab * i}`)
    }
}else{
    console.log('Por favor, digite um número entre 1 e 10: ')
}


//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
let soma = 0
let cont = 0
let result = 0

do{
    result = parseFloat(prompt('Digite números decimais (Para finalizar a operação e calcular a média, digite 0): '))

    if(result !== 0){
        soma += result //adiciona o numero a soma total
        cont++ //incrementa a contagem dos numeros
    }

}while(result != 0)

    if(cont > 0){
        let media = soma/(cont)
        console.log(`A média final é: ${media.toFixed(2)}`)
    }else{
        console.log('Digite um número válido, por favor.')
    }


//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
let number = Number(prompt('Digite o número que você deseja calcular o fatorial: '))
let fat = 1 //se comecar com 0, a multiplicação vai ser 0 sempre.

if(number < 0){
    console.log('O número inserido não pode ser negativo! Por favor, digite um número positivo!')
}else{
    for(let i = 1; i <= number; i++){
        fat *= i
    }
    console.log(`O fatorial de ${number} é: ${fat}`);
}


//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
let repeat = Number(prompt('Quantas vezes você deseja ver a sequência de Fibonacci? '));
let number1 = 0
let number2 = 1

console.log('Sequência de Fibonacci: ');

for(i = 1; i <= repeat; i++){
    console.log(number1)
    let proximo = number1 + number2;
    number1 = number2;
    number2 = proximo;
}
