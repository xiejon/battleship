import { Ship } from '../ship.js';

test('ship contains a length', () => {
    const expected = { length: 5 };
    const actual = Ship(5);
    expect(actual).toMatchObject(expected);
});

test('initializes hit locations corresponding to length', () => {
    const expected = { hitGrid: {'0': false, '1': false} };
    const actual = Ship(2);
    expect(actual).toMatchObject(expected);
});

test('can access index in hitGrid', () => {
    expect(Ship(2).hitGrid['1']).toBe(false);
});

test('hit() sets hitGrid index to true', () => {
    const newShip = Ship(2);
    newShip.hit(1);
    const expected = { hitGrid: {'0': false, '1': true} };
    expect(newShip).toMatchObject(expected);
});

test('isSunk() sets sunk to true if all hitGrid indexes are true', () => {
    const newShip = Ship(3);
    newShip.hit(0);
    newShip.hit(1);
    newShip.hit(2);
    newShip.isSunk();
    const expected = { sunk: true };
    expect(newShip).toMatchObject(expected);
});