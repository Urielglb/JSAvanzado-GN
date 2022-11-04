export const compact = (array) => {
    if(!array.length) throw Error('Array cannot be empty')
  
    return array.filter((element) => !!element)
  }