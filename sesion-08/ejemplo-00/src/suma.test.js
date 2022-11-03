const suma = require("./suma")

test("sumar con 0", () => {
    var x = Math.random()
    expect(suma(x,0)).toBe(x);
})

test('three times two is six', () => {
    expect(3 * 2).toBe(6)
})

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
})