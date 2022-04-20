console.log(this === global)
console.log(this === module)
console.log(this === module.exports) //this dentro de um modulo do node aponta para module.exports
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) // this dentro de função aponta para global
}

logThis()