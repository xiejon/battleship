import { Player, ComputerPlayer } from './player.js';
import { Dom } from './dom.js';



const Game = () => {
    const user = new Player();
    const computer = new ComputerPlayer();
    return {
        startGame() {
            Dom().renderGrids(user.board.grid);
        }
    }
}


export { Game };