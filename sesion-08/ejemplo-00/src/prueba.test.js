test('there is "or" in Hello World', () => {
    expect('Hello World').toMatch(/or/);
})

test('object assignment', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(numbers).toContain(3);
})