function foo(callback){
    var x = 5;
    console.log(x);
    callback();
    for (let i = 0; i<1000000000;i++){}
    console.log("termino el ciclo");
}

foo(() => console.log("hola soy un callback"))