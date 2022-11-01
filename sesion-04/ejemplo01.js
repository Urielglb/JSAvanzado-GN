function paso1 (x){
    return x+1
}

function paso2 (x){
    return x+2
}

function paso3 (x){
    return x+3
}

var result = paso1(5)
result = paso2(result)
result = paso3(result)

console.log(result)