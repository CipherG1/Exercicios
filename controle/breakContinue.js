const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums) {
    if(x == 5) {
        break //nao age sobre if
    }
    console.log(`${x} = ${nums[x]}`)
}

for(y in nums) {
    if (y == 5) {
        continue // não parou no 5, e seguiu apartir do 6 até o 10
    }
    console.log(`${y} = ${nums[y]}`)
}

externo:
for (a in nums) {
    for(b in nums){
        if(a == 2 && b == 3) break externo //criamos rotulo para o break agir apenas no externo
        console.log(`Par = ${a}, ${b}`)
    }
}
/*
Evitar utilizar esse tipo de estrutura... for dentro de for, break com rotulo...
Evitar utilizar desvios de fluxo (break, continue)
Há formas melhores de fazer a mesma função(aulas futuras) 
*/