import { Player, ComputerPlayer } from './player.js';
import { renderBoards, renderShips, renderPopup } from './dom.js';

const Game = () => {
    const user = new Player();
    const computer = new ComputerPlayer();
    return {
        user,
        computer,
        startGame() {
            user.turn = true;
            computer.placeShipsRandom();
        },
    }
}

const game = Game();

export { game };