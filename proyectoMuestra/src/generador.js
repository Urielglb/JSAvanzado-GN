

function constructR(recipe){
    const cont = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");
    const time = document.createElement("h4");
    const url = document.createElement("a");
    const desc = document.createElement("p");

    img.src = recipe.photoUrl
    title.innerText = recipe.title
    time.innerText = `Tiempo de preparación: ${recipe.totalTime} min`
    url.href = recipe.url
    url.innerText = "Enlace de la receta"
    desc.innerHTML = recipe.description

    cont.appendChild(img)
    cont.appendChild(title)
    cont.appendChild(time)
    cont.appendChild(desc)
    cont.appendChild(url)

    return cont

}

export { constructR }