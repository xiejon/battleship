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
      enemyPlayer.board.checkFleet();
      this.swapTurns(enemyPlayer);
    }
  }

  reset() {
    this.turn = false;
    this.board.clearBoard();
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

    enemyPlayer.board.checkFleet();
    this.swapTurns(enemyPlayer);

    return coords;
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

  placeShipsRandom() {
    const randomizeOrientation = () => {
      const randomInt = this.getRandomInt(0, 1);
      this.board.landscape = randomInt === 0;
    };
    const placeRandomShip = (ship) => {
      randomizeOrientation();
      let x = this.getRandomInt(0, 9);
      let y = this.getRandomInt(0, 9);
      let randomShip = this.board.placeShip(ship, x, y);

      while (randomShip === false) {
        randomizeOrientation();
        x = this.getRandomInt(0, 9);
        y = this.getRandomInt(0, 9);
        randomShip = this.board.placeShip(ship, x, y);
      }
    };
    placeRandomShip(this.board.carrier);
    placeRandomShip(this.board.battleship);
    placeRandomShip(this.board.destroyer);
    placeRandomShip(this.board.submarine);
    placeRandomShip(this.board.patrol);
  }

  computerReset() {
    this.reset();
    this.attackedCoords = {};
  }
}

export { Player, ComputerPlayer };
