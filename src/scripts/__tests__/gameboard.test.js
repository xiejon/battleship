import { Gameboard } from '../gameboard.js';
import { Ship } from '../ship.js';

test('has a 10x10 grid', () => {
    expect(Gameboard().grid[0][0]).toBe('');
    expect(Gameboard().grid[5][8]).toBe('');
    expect(Gameboard().grid[9][9]).toBe('');
});

test('places ship at coordinates', () => {
    const board = Gameboard();
    board.placeShip(board.destroyer, 0, 0);
    expect(board.grid[0][0]).toBe(board.destroyer);
    expect(board.grid[2][0]).toBe(board.destroyer);
    expect(board.grid[0][1]).toBe('');
});

test('places ship vertically', () => {
    const board = Gameboard();
    board.landscape = false;
    board.placeShip(board.destroyer, 0, 0);
    expect(board.grid[0][2]).toBe(board.destroyer);
});

test('ship correctly receives attack', () => {
    const board = Gameboard();
    board.placeShip(board.carrier, 0, 5);
    board.receiveAttack(0, 5);
    board.receiveAttack(4, 5);  
    expect(board.carrier.hits).toBe(2);
});

test('missed attack is registered', () => {
    const board = Gameboard();
    board.placeShip(board.carrier, 0, 5);
    board.receiveAttack(0, 4);
    expect(board.grid[0][4]).toBe(-1);
});