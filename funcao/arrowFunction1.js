let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a /*Quando é retirado '()', não é necessario 'return' também. return fica implicito*/
console.log(dobro(Math.PI)) /* mas é uma unica sentenca de codigo, por nao ter '()'*/

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' //() significa parametro
ola = _ => 'Olá' // _ também é um parametro
console.log(ola())