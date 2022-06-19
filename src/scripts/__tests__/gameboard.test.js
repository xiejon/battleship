import { Gameboard } from '../gameboard.js';
import { Ship } from '../ship.js';

test('has a 10x10 grid', () => {
    expect(Gameboard().grid[0][0]).toBe('');
    expect(Gameboard().grid[5][8]).toBe('');
    expect(Gameboard().grid[9][9]).toBe('');
});

describe('places ship correctly', () => {
    const board = Gameboard();
    
    test('places ship at [0, 0]', () => {
        board.placeShip(board.destroyer, 0, 0);
        expect(board.grid[0][0]).toBe(board.destroyer);
        expect(board.grid[2][0]).toBe(board.destroyer);
        expect(board.grid[0][1]).toBe('');
    });

    test('places ship at [1, 1]', () => {
        board.placeShip(board.patrol, 1, 1);
        expect(board.grid[0][1]).toBe('');
        expect(board.grid[1][1]).toBe(board.patrol);
        expect(board.grid[2][1]).toBe(board.patrol);
        expect(board.grid[3][1]).toBe('');
    });
    
    test('places ship vertically', () => {
        const board = Gameboard();
        board.landscape = false;
        board.placeShip(board.destroyer, 3, 0);
        expect(board.grid[3][2]).toBe(board.destroyer);
        expect(board.grid[3][3]).toBe('');
    });
});

describe('ship correctly receives attack', () => {
    const board = Gameboard();

    test('starting at x-position 0', () => {
        board.placeShip(board.carrier, 0, 5);
        board.receiveAttack(0, 5);
        board.receiveAttack(4, 5);  
    
        expect(board.carrier.hits).toBe(2);
    });

    test('starting at another position', () => {
        board.placeShip(board.patrol, 1, 5);
        board.receiveAttack(1, 5);
        board.receiveAttack(2, 5);  
    
        expect(board.patrol.hits).toBe(2);
    });
});

test('ship sinks after enough attacks', () => {
    const board = Gameboard();
    board.placeShip(board.patrol, 1, 1);
    board.receiveAttack(1, 1);
    board.receiveAttack(2, 1);
    expect(board.patrol.sunk).toBe(true);
});

test('missed attack is registered', () => {
    const board = Gameboard();
    board.placeShip(board.carrier, 0, 5);
    board.receiveAttack(0, 4);
    expect(board.grid[0][4]).toBe(-1);
});