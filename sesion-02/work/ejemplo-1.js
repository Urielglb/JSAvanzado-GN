const box = document.querySelector('.box');

box.addEventListener('click', () => {
    console.log(this);
})