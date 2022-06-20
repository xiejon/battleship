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
    const player = new Player();
    const computer = new ComputerPlayer();

    player.turn = true;
    player.attack(computer, 3, 4);
    expect(computer.board.grid[3][4]).toBe(-1);
})

test('gets random grid coordinate', () => {
    const computer = new ComputerPlayer();

    const coords = computer.getRandomCoords();
    expect(coords[0]).toBeGreaterThanOrEqual(0);
    expect(coords[0]).toBeLessThanOrEqual(9);
    expect(coords[1]).toBeGreaterThanOrEqual(0);
    expect(coords[1]).toBeLessThanOrEqual(9);
})

describe('randomAttack()', () => {
    const player = new Player();
    const computer = new ComputerPlayer();
    jest.spyOn(computer, 'getRandomCoords').mockReturnValue([5, 5]);

    test('checks if move is legal', () => {
        player.board.grid[5][5] = -1;
        expect(() => computer.randomAttack(player)).toThrow(Error);
    })
});
