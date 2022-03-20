//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

/*function conta (valor1, valor2){
    console.log(valor1+valor2, valor1-valor2, valor1*valor2, valor1/valor2)
}
conta (10, 2)
*/


//02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
//Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
//Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
//ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
//triângulo).



//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
/*function expoente(base, expoente){
    resultado = base ** expoente
    return resultado
}
console.log(expoente(10, 2))
*/


//04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.
/*function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(10, 3)
*/

//5)
/*function formatarValorDecimal(valorDecimal) {
    valorEmReais = ` R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)
*/


//6)
/*function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2)); //10/100 significa 10%
console.log(jurosCompostos(100, 10/100, 2));
*/







//7)