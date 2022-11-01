async function foo(v){
    return v
}

async function result(){
    var r = await foo(5)
    console.log(r)
}

result()
console.log(foo(8))



