let contador = 1 //variavel que controla o laço
while(contador <= 10) { // expressão que dirá se continua ou não
    console.log(`contador = ${contador}`) //incremento
    contador++ //adicionando +1 até chegar no valor'10'
}

for(let i = 1; i <= 10; i++) {
    console.log(`ì = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) { //navegando pelo array até chegar no final do 'array[]'
    console.log(`nota = ${notas[i]}`)
}