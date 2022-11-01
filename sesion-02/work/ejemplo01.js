let nombre = "Jose";
let apellido = 'Perez';

let large = `Hola
bienvedios
adios`

let num = 56

console.log(`${nombre} tiene la edad de ${num}`)
console.log(large)

const colors = ['blue', 'red', 'yellow'];

console.log(`Primary colors: ${ colors.join(', ') }`); 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`Odd numbers: ${ 
  numbers.map(function(n) { 
    return n + 1
  }) 
}`); // Odd numbers: 1,3,5,7,9