/**
 * O algoritmo ifelse serve para validação de dados, por exemplo:
 * if (variável == variavel2) { algo irá acontecer se a variavel foi igual a variavel2 } else { algo ira acontecer se a variavel for diferente da variavel2 }
 * 
 * if: nome do algoritmo
 * parenteses (): local onde se declaram os parameteos ou expressao a ser validada
 * chaves {}: bloco de codigos a serem executados, ou seja, tudo que estiver dentro do bloco de codigos será executado
 * else: "senão" é onde serão executados os codigos, que estiverem dentro do bloco (), caso a validação do algoritmo "if" retorne falsa
 * 
 * operadores lógicos:
 * 
 * == serve para comparar se uma variavel / valor é igual a outra
 * != serve para comparar se uma variavel / valor é diferente da outra
 * > serve para comparar se uma variavel / valor é maior que a outra
 * < serve para comparar se uma variavel / valor é menor a outra
 * >= serve para comparar se uma variavel / valor é maior ou igual a outra
 * <= serve para comparar se uma variavel / valor é menor ou igual a outra
 * 
 * se "falso": adicionar o ponto de exclamação no inicio de declarção de parametro/expressao, por exemplo:
 * if {
 *  variavel == variavel2
 * } { bloco de codigos }
 * 
 * aqui significa que: se a comparação da variável com a variavel2 retornar falso, os codigos que estiverem dentro do bloco de codigos serao executados, nao havendo a necessidade do uso da clausula "else"
 * 
 * criar um validador onde você irá declarar duas variaveis, cada uma com um valor diferente da outra, entao havera uma resposta diferente para cada situação
 * 
 * vamos criar dois inputs, onde cada imput irá para cada uma das duas variaveis, ou seja:
 * <input type="text" id="txtVar1" /> 
 * <input type="text" id="txtVar2" /> 
 * 
 * var txtVar1 = document.getElementById("txtVar1");
 * var txtVar2 = document.getElementById("txtVar2");
 * 
 * txtVar1.value que tem que ser comparado com o txtVar2.value
 * 
 * enviar os dados via console.log()
 */

function validar() {
    var txtVar1 = document.getElementById("txtVar1").value;
    var txtVar2 = document.getElementById("txtVar2").value;

if (txtVar1 == txtVar2) {
    console.log("1 = 2")
}

else if (txtVar1 > txtVar2) {
    console.log("1 > 2")
}

else console.log("1 < 2")
}
