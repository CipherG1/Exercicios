function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function SeForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}
SeForVerdadeEuFalo() //undefined = falso
SeForVerdadeEuFalo(null)
SeForVerdadeEuFalo(undefined)
SeForVerdadeEuFalo(NaN)
SeForVerdadeEuFalo('') //string vazia = falso também
SeForVerdadeEuFalo(0)
SeForVerdadeEuFalo(-1) // verdadeiro
SeForVerdadeEuFalo(' ') //string com espaço = v
SeForVerdadeEuFalo('?')
SeForVerdadeEuFalo([])
SeForVerdadeEuFalo([1, 2])
SeForVerdadeEuFalo({})