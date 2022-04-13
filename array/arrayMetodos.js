const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro! 'pop' remove o ultimo da lista
console.log(pilotos)

pilotos.push('Verstappen') //push adiciona no final
console.log(pilotos)

pilotos.shift() // remove o primeiro da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no primeiro da lista

//splice pode adicionar e remover elementos

//_________________________"lembrete" - splice.( Apartir de onde, quantos deletar, <X adicionado>, <Z adicionado>)

//*adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//*remover
pilotos.splice(3, 1) //massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)