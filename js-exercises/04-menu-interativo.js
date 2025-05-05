//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')()

console.log(`
Escolha uma das três opções de tinta para pintar o seu quarto:
1 - Roxo
2 - Azul
3 - Preto
`)

const menu = Number(prompt(`Digite o número da opção desejada: `))

if(isNaN(menu)){
    console.log('Erro: Por favor, digite um número válido de 1 a 3!')
}else{
    switch(menu){
        case 1:
            console.log('Você vai pintar o seu quarto com a tinta ROXA!')
            break
        case 2:
            console.log('Você vai pintar o seu quarto com a tinta AZUL!')
            break
        case 3:
            console.log('Você vai pintar o seu quarto com a tinta PRETA!')
            break
        default:
            console.log('Por favor, selecione uma opção de tinta válida!')
            break
    }
}
