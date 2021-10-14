const valores = [7.7, 8.9, 6.3, 9.2] //posição 0,1,2,3 de agrupamento array[]
console.log(valores[0], valores[3])
console.log(valores[4]) //trará resultado indefinido, outras linguagens dá erro
//      v    numero dentro de array, em que o item de posição estará vazio

valores[4] = 10 //ex: valores[10] = 10
console.log(valores)
console.log(valores.length) //quantas posições tem no elemento de array

valores.push({id: 3}, false, null, 'teste') //push adiciona na array
console.log(valores)

console.log(valores.pop()) //pop retira do array o valor
delete valores[0]
console.log(valores)

console.log(typeof valores)

//array é bem flexivel, adicionar, diminuir, mostra tamanhos
//é possivel deletar valores também
//array é objeto