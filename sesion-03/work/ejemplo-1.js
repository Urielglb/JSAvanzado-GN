const box = document.querySelector('.box');

// NO FUNCIONA
// box.addEventListener('click', () => {
//     this.classList.toggle('red');
//     this.classList.toggle('blue');
// })

// FUNTION
box.addEventListener('click', function () {
    this.classList.toggle('red');
    this.classList.toggle('blue');

    setTimeout(() => {
        this.classList.toggle('red');
        this.classList.toggle('blue');
    }, 1000)
})

// ARROW + EVENT
// box.addEventListener('click', event => {
//     event.target.classList.toggle('red');
//     event.target.classList.toggle('blue');
// })

