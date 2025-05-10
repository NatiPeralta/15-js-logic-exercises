//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')()

let number = Number(prompt('Digite um número de 1 a 10 para exibir a tabuada: '))

if(number >= 1 && number <= 10){
    console.log(`A tabuada do número ${number} é: `)
    for(let i = 1; i <= 10; i++){ 
        console.log(`${number} x ${i} é: ${number * i}`)
    }
}else{
    console.log('Por favor, digite um número entre 1 e 10: ')
}
