let arr = [1,2,3];
let copy = [ ... arr ];
//[  arr[0] , arr[1], arr[2] ]

arr[1] = 56;

console.log(arr)
console.log(copy)

const book = {
    author: 'Marijn Haverbeke',
    title: 'Eloquent JavaScript',
    year: 2018
};

let copyB = { ... book }
console.log(copyB)