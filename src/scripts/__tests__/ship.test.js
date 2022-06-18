import { Ship } from '../ship.js';

test('ship contains a length', () => {
    const expected = { length: 5 };
    const actual = Ship(5);
    expect(actual).toMatchObject(expected);
});

test('initializes hit locations corresponding to length', () => {
    const expected = { hitLoc: {'0': false, '1': false} };
    const actual = Ship(2);
    expect(actual).toMatchObject(expected);
});

test('can access index in hitLoc', () => {
    expect(Ship(2).hitLoc['1']).toBe(false);
});

test('hit() sets hitLoc index to true', () => {
    const newShip = Ship(2);
    newShip.hit(1);
    const expected = { hitLoc: {'0': false, '1': true} };
    expect(newShip).toMatchObject(expected);
});