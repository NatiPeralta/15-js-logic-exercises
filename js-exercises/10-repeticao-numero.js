//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')()
let number = Number(prompt('Digite um número inteiro: '))

for(let numb = 1; numb <= 10; numb++){
    console.log(`${numb}ª vez: ${number}`)
}

console.log('Repetição finalizada!')

