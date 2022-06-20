import { Ship } from "./ship.js";

// '' = empty square
// -1 = missed attack
// 0 = ship present
// 1 = ship hit

const Gameboard = () => {
    const grid = createGrid(10);
    let landscape = true;
    let fleetSunk = false;

    const carrier = Ship(5);
    const battleship = Ship(4);
    const destroyer = Ship(3);
    const submarine = Ship(3);
    const patrol = Ship(2);

    return {
        grid,
        landscape,
        fleetSunk,

        carrier,
        battleship,
        destroyer,
        submarine,
        patrol,

        placeShip(ship, x, y) {
            if (this.landscape === true) {
                for (let i = 0; i < ship.length; i++) {
                    this.grid[x + i][y] = ship;
                }
            } else {
                for (let i = 0; i < ship.length; i++) {
                    this.grid[x][y + i] = ship;
                }
            }
        },
        receiveAttack(x, y) {
            if (this.grid[x][y] === -1) return;
            if (this.grid[x][y] === '') return this.grid[x][y] = -1;
            
            const ship = this.grid[x][y];
            ship.hit();
            ship.isSunk();
        },
        checkFleet() {
            if (
                this.carrier.sunk === true
                && this.battleship.sunk === true
                && this.destroyer.sunk === true
                && this.submarine.sunk === true
                && this.patrol.sunk === true
                ) {
                    this.fleetSunk = true;
                }
        }
    }
}

function createGrid(num) {
    let grid = [];
    for (let col = 0; col < num; col++) {
        grid[col] = [];
        for (let row = 0; row < num; row++) {
            grid[col][row] = '';
        }
    }
    return grid;
}

module.exports = {
    Gameboard
}