const escola = "Cod3r"

console.log(escola.charAt(4)) 
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //Unicode. valor de 3 é 51 na tabela Unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1))//traz apartir da primeira letra 
console.log(escola.substring(0, 3))// traz da letra 0 até a letra 3
//chartAt(4) retorna a quarta letra //
//da "const escola = "Cod3r""//

//charAt(5) nao existe letra, e javascript nao causa erro por isso.
//apenas não encontrou a letra e nao trouxe nada
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) //replace substitui o 3 de Cod3r, por 'e', formando 'Coder'
console.log('Ana,Maria,Pedro'.split(',')) //separador com , *"_Array_"* um modo de organizar