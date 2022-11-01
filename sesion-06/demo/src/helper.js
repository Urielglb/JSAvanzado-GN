const sum = (a,b) => a + b;
const multiply = (a,b) => a * b;
const rest = (a,b) => a - b;

function operaciones(a,b){
    sum(a,b)
    rest(a,b)
    multiply(a,b)
}

export { sum, multiply }