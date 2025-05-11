//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require('prompt-sync')()

let soma = 0
let cont = 0
let result = 0

do{
    result = parseFloat(prompt('Digite números decimais (Para finalizar a operação e calcular a média, digite 0): '))

    if(result !== 0){
        soma += result //adiciona o numero a soma total
        cont++ //incrementa a contagem dos numeros
    }

}while(result != 0)

    if(cont > 0){
        let media = soma/(cont)
        console.log(`A média final é: ${media.toFixed(2)}`)
    }else{
        console.log('Digite um número válido, por favor.')
    }
