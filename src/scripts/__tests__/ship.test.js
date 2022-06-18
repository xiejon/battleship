import { Ship } from '../ship.js';

test('ship contains a length', () => {
    const expected = { length: 5 }
    const actual = Ship(5);
    expect(actual).toMatchObject(expected);
});

