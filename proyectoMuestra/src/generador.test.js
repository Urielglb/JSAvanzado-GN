import { constructR } from "./generador";

test("el elemento se construye con la info", () => {
    var recipe = {
        "photoUrl" : "urlP",
        "title" : "titulo",
        "totalTime" : 50,
        "url" : "url",
        "description" : "desc"
    }

    var elemento = constructR(recipe)
    var hijos = elemento.childNodes;

    expect(hijos[1].innerText).toBe(recipe.title)
})