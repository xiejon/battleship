import { Player, ComputerPlayer } from './player.js';
import { Dom } from './dom.js';



const Game = () => {
    const user = new Player();
    const computer = new ComputerPlayer();
    return {
        startGame() {
            user.turn = true;

            Dom().renderGrids(user, computer);

            this.positionShips(user);
            this.positionShips(computer);

            Dom().renderShips(user);


            // temp
            Dom().tempRenderCompShips(computer.board.grid);
        },
        // Temporary
        positionShips(player) {
            player.board.placeShip(player.board.carrier, 1, 0);
            player.board.placeShip(player.board.battleship, 3, 3);
            player.board.placeShip(player.board.destroyer, 5, 5);
            player.board.placeShip(player.board.submarine, 6, 9);
            player.board.placeShip(player.board.patrol, 3, 8);

            player.board.checkIfReady();
        }
    }
}


export { Game };