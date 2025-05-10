//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require('prompt-sync')() 

let number1 = Number(prompt('Digite o primeiro número: '))
let number2 = Number(prompt('Digite o segundo número: '))


if (isNaN(number1) || isNaN(number2)) {
    console.log('Erro: Digite um número inteiro, por favor!')
}else if(number1 === number2){
    console.log('Por favor, digite números diferentes!')
}else{
    let numeros = [number1, number2]
    numeros.sort((a, b) => a - b)
    console.log(`Ordem crescente: ${numeros[0]}, ${numeros[1]}`)
}