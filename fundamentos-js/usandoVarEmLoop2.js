var funcs = [] //var ou const, nao faz diferença...

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()