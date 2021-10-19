function teste1(num) {
    if(num > 7)
        console.log(num)

console.log('Final') //'Final' será mostrado por não estar dependente do if
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { //cuidado com o ';' nao usar com estruturas de controle (if/else/switch...)
        console.log(num)
    }
}
//codigo errado com o ;
teste2(6)
teste2(8)