function createPhoneNumber(numbers) {
    let format = '(xxx) xxx-xxxx'
    for (let num of numbers) {
      format = format.replace('x', num)
    }
    return format
  }

  console.log(createPhoneNumber([2,3,4,1,6,7,3,1,4,5,5,6,5]))

  function findMissingNumbers (numbers) { 
    let top = Math.max(...numbers)
    let low = Math.min(...numbers)
    let arr = []
    for(let i = low; i <= top;i++) arr.push(i);
    return arr.filter(x => !numbers.includes(x));
  }

  console.log(findMissingNumbers([2, 1, 9, 5, 7, 3, 10]))