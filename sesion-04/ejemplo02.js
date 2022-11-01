function foo(){
    return new Promise((resolve, reject) =>{
        var r = Math.random()
        if (r > 10)
            resolve(100);
        else
            reject(new Error("promise failed!!"))
    })
}

foo()
.then(value => console.log(value))
.catch(error => console.log(error.message))
