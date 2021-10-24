class Pessoa { //class
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`) //em browser o this fica inacessivel por variar
    }
}

const p1 = new Pessoa('João') //factory
p1.falar()

const CriarPessoa = nome => {
    return {
    falar: () => console.log(`Meu nome é ${nome}`) //não tem problemas de variação
    }
}

const p2 = CriarPessoa('João')
p2.falar()