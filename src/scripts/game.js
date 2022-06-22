import { Player, ComputerPlayer } from './player.js';
import { renderBoards, renderShips, renderPopup } from './dom.js';

const Game = () => {
    const user = new Player();
    const computer = new ComputerPlayer();
    return {
        startGame() {
            user.turn = true;

            renderBoards(user, computer);
            renderShips(user);

            computer.placeShipsRandom();
        },
    }
}

function resetGame() {
    const columns = document.querySelectorAll('.column');
    const boxes = document.querySelectorAll('.box');

    for (let box of boxes) {
        box.remove();
    }
    for (let column of columns) {
        column.remove();
    }

    const newGame = Game();
    newGame.startGame();
}

export { Game };