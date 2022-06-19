import { Gameboard } from '../gameboard.js';

test('has a 10x10 grid', () => {
    expect(Gameboard().grid[0][0]).toBe(0);
    expect(Gameboard().grid[5][8]).toBe(0);
    expect(Gameboard().grid[9][9]).toBe(0);
});