//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

const prompt = require('prompt-sync')()

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
