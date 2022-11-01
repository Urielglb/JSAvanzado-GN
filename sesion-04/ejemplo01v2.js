function paso1(x, callback){
    callback(x+1)
}

function paso2(x, callback){
    callback(x+2)
}

function paso3(x, callback){
    callback(x+3)
}

paso1(5, (y) => {
    paso2(y, (z) => {
        paso3(z, (w) =>{
            console.log(w)
        })
    })
})