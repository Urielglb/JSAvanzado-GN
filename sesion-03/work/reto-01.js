let arraynumbers= [1,2,3,4,5,6,7,8,9,0];
function createPhoneNumber(array){
    let telephone= "(" ;
    let texto = `(${array[0]}${array[1]}${array[2]})  ${array[3]}${array[4]}${array[5]} - ${array[6]}${array[7]}${array[8]} ${array[9]}`;
    for (let index = 0; index < array.length; index++) {
       if (index===3){
        telephone = telephone+") " + array[index];
       }else if(index===6){
        telephone = telephone+"-"+array[index];
       }else{
        telephone = telephone+array[index];
       }
    }
    return telephone;
}
console.log(createPhoneNumber(arraynumbers));
function findMissingNumbers(array){
    let maximo = Math.max(...array);
    let minimo = Math.min(...array);
    for (let index = minimo; index < maximo; index++) {
       if( !array.includes(index))
       {
        console.log(index);
       }
    }
}
findMissingNumbers([2, 1, 9, 5, 7, 3, 10]);