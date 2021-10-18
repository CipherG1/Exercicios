console.log(Math.ceil(6.1)) //ceil arredonda valor para cima, floor arredonda para baixo
const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2' //não é recomendado utilizar assim
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome // this é visivel fora do bloco de escopo
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()