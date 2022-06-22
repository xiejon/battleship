import { Player, ComputerPlayer } from './player.js';
import { renderBoards, getCoords, getBox, renderHitOrMiss, renderShips, tempRenderCompShips } from './dom.js';

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

            this.activateBoard();
        },
        activateBoard() {
            // Add event listeners on computer gameboard to register user attacks
            const computerBoard = document.querySelectorAll('.computer .box');
                
            for (let box of computerBoard) {
                box.addEventListener('click', e => {
                    if (!user.turn || e.target.getAttribute('clicked') === 'true') return;

                    this.userAttack(box, e, user, computer);
                    this.computerAttack(computer, user);
                
                    // Prevent square from being clicked twice
                    e.target.setAttribute('clicked', 'true');
                });
            }
        },
        userAttack(box, e, user, enemy) {
            // Get coordinates of chosen attack site
            const coords = getCoords(e);
            const x = coords[0];
            const y = coords[1];

            user.attack(enemy, x, y);
            renderHitOrMiss(box, enemy, x, y);

            this.checkWinner();
        },
        computerAttack(computer, enemy) {
            const coords = computer.randomAttack(enemy);
            const x = coords[0];
            const y = coords[1];

            const box = getBox(x, y);

            renderHitOrMiss(box, enemy, x, y);

            this.checkWinner();
        },
        checkWinner() {
            user.board.checkFleet();
            computer.board.checkFleet();

            if (computer.board.fleetSunk) {
                alert('You Win!');
                resetGame();
            } else if (user.board.fleetSunk) {
                alert('You Lose!')
                resetGame();
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