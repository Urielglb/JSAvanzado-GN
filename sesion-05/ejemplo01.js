
function getImagesFromNasa(){
    return fetch('https://epic.gsfc.nasa.gov/api/natural')
    .then(resolve => {return resolve.json()})
}

function getImageUrl(data){
    const baseImageUrl = 'https://epic.gsfc.nasa.gov/archive/natural';
    const date = data.date.substr(0,10).split('-');

    return `${baseImageUrl}/${date[0]}/${date[1]}/${date[2]}/png/${data.image}.png`
}

const app = document.getElementById('app');

getImagesFromNasa()
.then(data => {
    data.forEach(element => {
        const img =document.createElement("img");
        img.src = getImageUrl(element);

        app.appendChild(img)
    });
})