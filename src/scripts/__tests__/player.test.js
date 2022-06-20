import { Player, ComputerPlayer } from '../player.js';

test('computerPlayer inherits methods', () => {
    const computer = new ComputerPlayer('Computer');
    const player = new Player('player');
    expect(computer.board).toBe(player.board)
})

test('changes turns', () => {
    const player = new Player('player');
    expect(player.isTurn).toBe(false);
    player.changeTurn();
    expect(player.isTurn).toBe(true);
})