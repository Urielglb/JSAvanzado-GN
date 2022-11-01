var colors = [ 'Red', 'Blue', 'Yellow' ];

// const [r,b,y] = colors
// const newColors = [y,b,r]

// console.log(newColors)

[colors[0], colors[2]] = [colors[2], colors[0]]

console.log(colors)

const person = {
    firstName: 'John',
    lastName: 'Doe',
    country: 'Mexico'
};

const { firstname : a = 5 } = person

console.log(a)
console.log(person)