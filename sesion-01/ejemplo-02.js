var x = 0;

function first (){
    var x = 1;
    // console.log(x)
    second();
}

function second (){
    var x = 2;
    // console.log(x)
    third();
}

function third (){
    console.log(x);
    var x = 3;
    console.log(x)
}

first();
// console.log(x);