//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')()

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