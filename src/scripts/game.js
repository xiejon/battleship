import { Player, ComputerPlayer } from './player.js';
import { renderBoards, renderShips, renderPopup } from './dom.js';

const Game = () => {
    const user = new Player();
    const computer = new ComputerPlayer();
    return {
        startGame() {
            user.turn = true;

            renderBoards(user, computer);

            // // temp
            // this.positionShips(user);
            // this.positionShips(computer);

            renderShips(user);

            // // temp
            // tempRenderCompShips(computer.board.grid);

        },



        // // Temporary
        // positionShips(player) {
        //     player.board.placeShip(player.board.carrier, 1, 0);
        //     player.board.placeShip(player.board.battleship, 3, 3);
        //     player.board.placeShip(player.board.destroyer, 5, 5);
        //     player.board.placeShip(player.board.submarine, 6, 9);
        //     player.board.placeShip(player.board.patrol, 3, 8);

        //     player.board.checkIfReady();
        // }
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