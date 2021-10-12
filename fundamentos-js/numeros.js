const peso1 = 1.0 //ex: 1.1, não será mais inteiro
const peso2 = Number('2.0') //1,2,3,4,5 exemplos de  números inteiros
//                              1.1, 1.2, 1.3 numeros não inteiros
console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //isInteger/é inteiro//
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //toFixed faz reduzir zeros a direita da virgula
console.log(media.toString(2)) // numero 2 converte em binário
console.log(typeof media) //typeof busca para mostrar o tipo
console.log(typeof Number) //Number é função ('N' maiusculo)