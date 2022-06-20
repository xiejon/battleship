import { Player, ComputerPlayer } from '../player.js';

describe('sets and ends player turn', () => {
    const player = new Player('player');

    test('sets turn', () => {
        player.setTurn();
        expect(player.turn).toBe(true);
    })

    test('ends turn', () => {
        player.turn = true;
        player.disableTurn();
        expect(player.turn).toBe(false);
    })
});


test('enemy board receives attack', () => {
    const player1 = new Player('');
    const player2 = new Player('');
    player1.turn = true;
    player1.attack(player2, 3, 4);
    expect(player2.board.grid[3][4]).toBe(-1);
})