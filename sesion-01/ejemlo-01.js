var nombre = "Javier";
// console.log(nombre);
// console.log(x);
var x = 9;

// console.log(foo2);

var foo2 = (x) => 5+x

// console.log(foo2(8));

function goo (){
    foo(6);
    return 5;
}

function foo (x){
    nombre = "Bedu";
    var y = x * 2;
    // console.log(y);
}

foo(5);
goo();
// console.log(x);
// console.log(nombre);

if (true) {
    var zoo = 56;
}

// console.log(zoo)


var numbers = [1, 2, 3, 4, 5];
var doubles = [];
var i = 10;

function doo (){
    for(var i = 0; i < numbers.length; i++) {
        doubles.push(numbers[i] * 2);
    }
}

doo()
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]
console.log(i);
