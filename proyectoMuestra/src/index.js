import { getRecipes } from './conexion.js'
import { constructR } from './generador.js'

const app = document.getElementById('app');


// function displayData(data) {
//     data.forEach(e => {
//         app.appendChild(constructR(e))
//     });
// }

getRecipes()
.then(data => data.forEach(e => {
    app.appendChild(constructR(e))
}));