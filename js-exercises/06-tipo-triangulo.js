//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')()

let ladoA = Number(prompt('Digite um número inteiro para o lado A do triângulo: ')) 
let ladoB = Number(prompt('Digite um número inteiro para o lado B do triângulo: '))
let ladoC = Number(prompt('Digite um número inteiro para o lado C do triângulo: '))

if((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)){
    console.log('Os lados fornecidos formam um triângulo!')

    if((ladoA == ladoB) && (ladoB == ladoC)){
        console.log('Todos os lados iguais formam um Triângulo Equilátero!')
    }else if((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)){
        console.log('Os dois lados iguais formam um Triângulo Isósceles!')
    }else{
        console.log('Todos os lados diferentes formam um Triângulo Escaleno!')
    }

}else{
    console.log('Os lados fornecidos não formam um triângulo!')
}




