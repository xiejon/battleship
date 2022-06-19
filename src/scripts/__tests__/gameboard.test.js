import { Gameboard } from '../gameboard.js';

test('has a 10x10 grid', () => {
    expect(Gameboard().grid[0][0]).toBe(-1);
    expect(Gameboard().grid[5][8]).toBe(-1);
    expect(Gameboard().grid[9][9]).toBe(-1);
});

test('places ship at coordinates', () => {
    const board = Gameboard();
    board.placeShip(3, 0, 0);
    expect(board.grid[0][0]).toBe(0);
    expect(board.grid[2][0]).toBe(0);
    expect(board.grid[0][1]).toBe(-1);
});

test('ship correctly receives attack', () => {
    const board = Gameboard();
    board.placeShip(5, 0, 5);
    board.receiveAttack(0, 5);
    board.receiveAttack(4, 5);  
    expect(board.grid[0][5]).toBe(1);
    expect(board.grid[4][5]).toBe(1);
});

test('missed attack registers correctly', () => {
    const board = Gameboard();
    board.placeShip(5, 0, 5);
    board.receiveAttack(0, 4);
    expect(board.grid[0][4]).toBe(-1);
});