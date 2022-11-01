const baseURL = 'https://api.sampleapis.com/recipes/recipes';

function getRecipes(){
    return fetch(baseURL)
        .then(resp => {return resp.json()})
}

export { getRecipes }