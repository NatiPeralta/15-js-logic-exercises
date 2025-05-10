//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require('prompt-sync')()
let soma = 0
let numUser = [] //array para guardar os números

for(let numb = 1; numb <= 5; numb++){
    let number = Number(prompt('Digite um número: '))
    numUser.push(number);  //adiciona o número ao array
    soma += number
}
console.log(`Os números digitados foram: ${numUser.join(', ')}`); //transforma o array em uma string separada por vírgulas
console.log(`A soma dos números é: ${soma}`)