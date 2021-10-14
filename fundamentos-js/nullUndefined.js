let valor // Não inicializada (undefined)
console.log(valor)

valor = null //Ausência de valor (null utilizar para resetar variavel, retirar o valor da variavel)
console.log(valor)
//console.log(valor.toString()) //Não se pode ler a string de null, causa erro.

const produto = {} //objeto vazio
console.log(produto.preco) //preço ainda nao definido

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined. deixe a linguagem faze-lo.
//para limpar a variavel, utilize 0 ou null
console.log(!!produto.preco)
//delete produto.preco //para tirar atributo do objeto
console.log(produto)

produto.preco = null //sem preço ou ainda não definido (nao utilizar undefined)
console.log(!!produto.preco)
console.log(produto)
