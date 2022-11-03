import { getRecipes } from "./conexion";

test("Recibimos info", () => {
    getRecipes()
    .then(data => {
        expect(data.length).not.toEqual(0);
    })
})

test("No recibimos indefinido", () => {
    getRecipes()
    .then(data => {
        expect(data).not.toEqual(undefined);
    })
})