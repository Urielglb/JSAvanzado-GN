var a = {
    b: {
        c : 4
    }
}

var d = { ... a.b }

const oneToThree = [1, 2, 3];
const fourToSix = [4, 5, 6];

const allElements = [ 0, ... oneToThree, ... fourToSix, 7]

const oneToSix = [ ... oneToThree, 4,5,6]

const all = [... fourToSix, ... oneToThree]

console.log(all)


const obj1 = {
    0: 1,
    1: 2,
    2: 3
}
const obj2 = {
    a: 4,
    e: 5,
    f: 6
}

//const arr2 = [ ... obj1] NO SE PUEDE

const newObj = { ... obj2, ... obj1 , a:17}


const newEl = {... obj1, x:56}


const arr1 = [1,2,3,4,5]

const objArr = { ... arr1 }


