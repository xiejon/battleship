import { Gameboard } from '../gameboard.js';

test('has a 10x10 grid', () => {
    expect(Gameboard().grid[0][0]).toBe(-1);
    expect(Gameboard().grid[5][8]).toBe(-1);
    expect(Gameboard().grid[9][9]).toBe(-1);
});

test('places ship at coordinates', () => {
    const board = Gameboard();
    board.placeShip(3, 0, 0);

    expect(board.grid[0][0]).toBe(0)
    expect(board.grid[2][0]).toBe(0)
});