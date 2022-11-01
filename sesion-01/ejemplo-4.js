var listItems = document.querySelectorAll('ul li');

function imprime(){
    console.log(this.innerText);
}

for (var i = 0; i < listItems.length; i++) {
    imprime.call(listItems[i]);
}