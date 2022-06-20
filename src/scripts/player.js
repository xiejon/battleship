import { Gameboard } from './gameboard.js';

class Player {
    constructor() {
        this.board = Gameboard();
        this.turn = false;
    }
    setTurn() {
        this.turn = true;
    }
    disableTurn() {
        this.turn = false;
    }
    attack(enemyPlayer, x, y) {
        if (this.turn) {
            enemyPlayer.board.receiveAttack(x, y);
        }
        this.disableTurn();
        enemyPlayer.setTurn();
    }
}

class ComputerPlayer extends Player {
    constructor() {
        super();
    }
    randomAttack(enemyPlayer) {
        const enemyBoard = enemyPlayer.board.grid;
        const randomCoords = this.getRandomCoords();
        const x = randomCoords[0];
        const y = randomCoords[1];

        // Check if move is legal
        if (enemyBoard[x][y] === -1) {
            throw new Error('Invalid set of coordinates.');
        }

    }
    getRandomCoords() {
        const x = getRandomInt(0, 9);
        const y = getRandomInt(0, 9);
        return [x, y];
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


module.exports = {
    Player,
    ComputerPlayer
}