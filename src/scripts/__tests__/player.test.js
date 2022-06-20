import { Player, ComputerPlayer } from '../player.js';


describe('sets and ends player turn', () => {
    const player = new Player();

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
    const player1 = new Player();
    const player2 = new Player();
    player1.turn = true;
    player1.attack(player2, 3, 4);
    expect(player2.board.grid[3][4]).toBe(-1);
})

test('randomAttack() gets random grid coordinate', () => {
    const computer = new ComputerPlayer();
    const coords = computer.getRandomCoords();
    expect(coords[0]).toBeGreaterThanOrEqual(0);
    expect(coords[0]).toBeLessThanOrEqual(9);
    expect(coords[1]).toBeGreaterThanOrEqual(0);
    expect(coords[1]).toBeLessThanOrEqual(9);
})