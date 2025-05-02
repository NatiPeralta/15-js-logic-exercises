// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')()

let number = Number(prompt("Insira um número para verificar se ele é PAR ou ÍMPAR: "))

if(isNaN(number)){
    console.log('Erro: Digite um número válido, por favor!')
}else if(number % 2 === 0){
    console.log('O número ' + number + ' é PAR!')
}else{
    console.log('O número ' + number + ' é ÍMPAR!')
}