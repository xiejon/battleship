import { Gameboard } from './gameboard.js';

class Player {
    constructor(name) {
        this.name = name;
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
    constructor(name) {
        super(name);
    }
}


module.exports = {
    Player,
    ComputerPlayer
}