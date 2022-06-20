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

describe('gets random grid coordinates', () => {
    const computer = new ComputerPlayer();

    test('gets coords between 0-9', () => {
        const coords = computer.getRandomCoords();
        expect(coords[0]).toBeGreaterThanOrEqual(0);
        expect(coords[0]).toBeLessThanOrEqual(9);
        expect(coords[1]).toBeGreaterThanOrEqual(0);
        expect(coords[1]).toBeLessThanOrEqual(9);
    });

    test('gets new coords if coords attacked before', () => {
        jest.spyOn(computer, 'getRandomInt')
            .mockReturnValueOnce(3)
            .mockReturnValueOnce(3)
            .mockReturnValueOnce(4)
            .mockReturnValueOnce(4)
            .mockReturnValueOnce(5)
            .mockReturnValueOnce(5);

        computer.attackedCoords = {'33': 0, '44': 0};

        const expected = [5, 5];

        expect(computer.getRandomCoords()).not.toBe([3, 3])
        expect(computer.getRandomCoords()).not.toBe([4, 4])
        expect(computer.getRandomCoords()).toMatchObject(expected);
    });

});

describe('randomAttack()', () => {
    const player = new Player();
    const computer = new ComputerPlayer();

    jest.spyOn(computer, 'getRandomCoords').mockReturnValue([5, 5]);

    afterEach(() => {
        // Reset tested coordinates
        player.board.grid[5][5] = '';
    });

    test('checks if move is legal', () => {
        player.board.grid[5][5] = -1;
        expect(() => computer.randomAttack(player)).toThrow(Error);
    })

    test('registers attacked coordinate', () => {
        expect(player.board.grid[5][5]).toBe('');
        computer.randomAttack(player);
        expect(player.board.grid[5][5]).toBe(-1);
    });

    test('hash table contains attacked coordinates', () => {
        computer.randomAttack(player);
        const expected = {'55': 0};
        expect(computer.attackedCoords).toMatchObject(expected);
    });


});
