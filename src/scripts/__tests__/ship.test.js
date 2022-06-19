import { Ship } from '../ship.js';

test('ship contains a length', () => {
    const expected = { length: 5 };
    const actual = Ship(5);
    expect(actual).toMatchObject(expected);
});

test('ship is sunk after enough hits', () => {
    const newShip = Ship(3);
    newShip.hit();
    newShip.hit();
    newShip.hit();
    newShip.isSunk();
    const expected = { sunk: true };
    expect(newShip).toMatchObject(expected);
});