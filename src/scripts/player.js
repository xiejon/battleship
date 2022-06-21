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
    swapTurns(enemyPlayer) {
        this.disableTurn();
        enemyPlayer.setTurn();
    }
    attack(enemyPlayer, x, y) {
        if (enemyPlayer.board.grid[x][y] === -1) throw new Error('Error: Invalid set of coordinates.');
        if (this.turn) {
            enemyPlayer.board.receiveAttack(x, y);
            this.swapTurns(enemyPlayer);
        }
    }
}

class ComputerPlayer extends Player {
    constructor() {
        super();
        this.attackedCoords = {};
    }
    randomAttack(enemyPlayer) {
        const enemyBoard = enemyPlayer.board;
        const coords = this.getRandomCoords();
        const x = coords[0];
        const y = coords[1];

        enemyBoard.receiveAttack(x, y);
        this.attackedCoords[`${x}${y}`] = 0;

        this.swapTurns(enemyPlayer);
    }
    getRandomCoords() {
        let x = this.getRandomInt(0, 9);
        let y = this.getRandomInt(0, 9);

        // Check hash table for coords. If attacked before, choose new coords
        while (this.attackedCoords[`${x}${y}`] !== undefined) {
            x = this.getRandomInt(0, 9);
            y = this.getRandomInt(0, 9);
        }
        
        return [x, y];
    }
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}



module.exports = {
    Player,
    ComputerPlayer
}