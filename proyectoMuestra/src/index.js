import { getRecipes } from './conexion'
import { constructR } from './generador'
import { map } from './mapas'

import miImagen from "./img/back.jpeg"



const app = document.getElementById('app');

document.body.style.backgroundImage = `url(${miImagen})`

getRecipes()
.then(data => data.forEach(e => {
    app.appendChild(constructR(e))
}));

