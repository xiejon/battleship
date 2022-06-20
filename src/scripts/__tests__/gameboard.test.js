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

describe('board correctly receives attacks', () => {
    const board = Gameboard();

    test('ship at x-position 0', () => {
        board.placeShip(board.carrier, 0, 5);
        board.receiveAttack(0, 5);
        board.receiveAttack(4, 5);  
        expect(board.carrier.hits).toBe(2);
    });

    test('ship at another position', () => {
        board.placeShip(board.patrol, 1, 5);
        board.receiveAttack(1, 5);
        board.receiveAttack(2, 5);  
        expect(board.patrol.hits).toBe(2);
    });

    test('registers missed attack', () => {
        board.placeShip(board.carrier, 5, 5);
        board.receiveAttack(5, 4);
        expect(board.grid[5][4]).toBe(-1);
    });

    test('ship sinks after enough attacks', () => {
        board.placeShip(board.patrol, 1, 1);
        board.receiveAttack(1, 1);
        board.receiveAttack(2, 1);
        expect(board.patrol.sunk).toBe(true);
    });

});

test('register if entire fleet is sunk', () => {
    const board = Gameboard();
    board.carrier.sunk = true;
    board.battleship.sunk = true;
    board.destroyer.sunk = true;
    board.submarine.sunk = true;
    board.patrol.sunk = true;
    board.checkFleet();
    expect(board.fleetSunk).toBe(true);
})