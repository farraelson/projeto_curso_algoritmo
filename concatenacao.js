/*  nome: caractere
   numero: real
   

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval ("Digite o nome: ")
   leia (nome)
   escreval ("Digite o número: ")
   leia (numero)
   
   escreval (nome, ": ", numero, 15)*/

   var nome, numero

   nome = prompt("Digite seu nome")
   numero = prompt("Digite seu número")

   document.getElementById("paragrafo").innerText = nome + ": " + numero