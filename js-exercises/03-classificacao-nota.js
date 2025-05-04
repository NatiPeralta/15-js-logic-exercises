//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')()

let nota = Number(prompt('Digite uma nota de 0 a 10: '))

let media = 5

if(isNaN(nota) || nota < 0 || nota > 10){
    console.log('Erro: Por favor, digite um número inteiro de 0 a 10!')
}else if(nota > media){
    console.log(`O(a) aluno(a) que tirou a nota ${nota} está APROVADO!`)
}else if(nota === media){
    console.log(`O(a) aluno(a) que tirou a nota ${nota} está em RECUPERAÇÃO!`)
}else{
    console.log(`O(a) aluno(a) que tirou a nota ${nota} está REPROVADO!`)
}