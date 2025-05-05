//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
//IMC peso (kg) / (altura (m) * altura (m))

const prompt = require('prompt-sync')()

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