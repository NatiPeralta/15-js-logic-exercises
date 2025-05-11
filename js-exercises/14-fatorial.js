//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require('prompt-sync')()

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

