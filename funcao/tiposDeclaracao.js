console.log(soma(3, 4)) //function declaration pode ser chamada antes da funcao ser 'setada'
//console.log(sub(3, 4)) // erro
//console.log(mult(3, 4)) // erro

// function declaration //pode chamar antes da declaracao
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) /*nomeando a funcao. ajuda a encontrar algum erro*/ {
    return x * y
}