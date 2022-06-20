import { Gameboard } from './gameboard.js';

class Player {
    constructor(name) {
        this.name = name;
        this.board = Gameboard();
        this.isTurn = false;
    }
    test() {
        return 'test';
    }
    changeTurn() {
        this.turn
    }
}

class ComputerPlayer extends Player {
    constructor(name) {
        super(name);
    }
    do() {
        return 'yes';
    }
}


module.exports = {
    Player,
    ComputerPlayer
}