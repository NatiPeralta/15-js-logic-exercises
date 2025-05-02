//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')()

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