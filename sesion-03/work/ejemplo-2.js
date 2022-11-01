function foo (x=4, y=7){
    console.log(x,y);
}

// foo(3,5)
// foo(3)
// foo()
// foo(3,5,6,2,"hola",56,[3,4])

function calculaTotal(subtotal, tax=0.15) {
    console.log(subtotal + (subtotal * tax))
}

// calculaTotal(100,0.15)
// calculaTotal(100)

function suma(...numbers){
    return numbers.reduce((prev, curr) => prev + curr, 0);
}

// console.log(suma(8,2))
// console.log(suma(8))
// console.log(suma())
// console.log(suma(8,2,4,5,6,3,2,6,8,3,2,"2"))

function sumaR(x=9,y=0, ...numbers){
    var r = numbers.reduce((prev, curr) => prev + curr, 0);
    return r + x + y 
}

console.log(sumaR(8))
console.log(sumaR(8,2,5,6,7))
