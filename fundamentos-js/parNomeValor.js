// par nome/valor
const saudacao = 'Opa' // contexto léxico

function exec() {
    const saudacao = 'Falaaa' // contexto léxico. local onde está definido
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)