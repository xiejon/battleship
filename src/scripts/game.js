import { Player, ComputerPlayer } from './player.js';
import { renderBoards, getCoords, renderHit, renderMiss, renderShips, tempRenderCompShips } from './dom.js';



const Game = () => {
    const user = new Player();
    const computer = new ComputerPlayer();
    return {
        startGame() {
            user.turn = true;

            renderBoards(user, computer);

            // temp
            this.positionShips(user);
            this.positionShips(computer);

            renderShips(user);


            // temp
            tempRenderCompShips(computer.board.grid);



            // Add event listeners on computer gameboard to register user attacks
            const computerBoard = document.querySelectorAll('.computer .box');
    
            for (let box of computerBoard) {
                box.addEventListener('click', e => {
                    if (!user.turn || e.target.getAttribute('clicked') === 'true') return;

                    const coords = getCoords(e);
                    const x = coords[0];
                    const y = coords[1];

                    user.attack(computer, x, y);

                    if (computer.board.grid[x][y] === -1) {
                        // Missed shot
                        renderMiss(box);
                    } else {
                        // Hit ship
                        renderHit(box);
                    }

                    renderAttack(e, box, user, computer);
                    renderComputerAttack(computer, user);

                    // Prevent square from being clicked twice
                    e.target.setAttribute('clicked', 'true');
                });
            }
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