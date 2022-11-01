function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let r = []
        for(let i = 0; i < promises.length; i++){
            promises[i]
            .then(result => {
                r.push(result)
                console.log(r)
            })
            .catch(reject)
            
        }
        resolve(r)
    })
}

function soon(value) {
    return new Promise(resolve => {
      setTimeout(() => resolve(value), 1000)
    })
  }
  
  // Test cases
  promiseAll([])
    .then(results => {
      console.log('Expected result []: ', results)  
    })
  
  promiseAll([soon(1), soon(2), soon(3)])
    .then(results => {
      console.log('Expected result [1, 2, 3]: ', results)  
    })
  
  promiseAll([soon(1), Promise.reject('X'), soon(3)])
    .then(results => {
      console.log('We should not get here')  
    })
    .catch(error => {
      console.log('Expected error X: ', error)
    })

    console.log(Promise.all([soon(1), soon(2), soon(3)]))