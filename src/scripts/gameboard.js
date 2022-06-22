import { Ship } from "./ship.js";

// '' = empty square
// -1 = missed attack
// 1 = ship hit

const Gameboard = () => {
    const grid = createGrid(10);
    let landscape = true;
    let fleetSunk = false;
    let isReady = false;

    const carrier = Ship(5);
    const battleship = Ship(4);
    const destroyer = Ship(3);
    const submarine = Ship(3);
    const patrol = Ship(2);

    return {
        grid,
        landscape,
        fleetSunk,
        isReady,

        carrier,
        battleship,
        destroyer,
        submarine,
        patrol,

        placeShip(ship, x, y) {
            if (this.landscape === true) {
                // Return false if ship length exceeds grid
                if (x + ship.length > 9) return false;

                // Return false if there is a ship already at location
                for (let i = 0; i < ship.length; i++) {
                    if (this.grid[x + i][y] !== '') return false;
                }

                for (let i = 0; i < ship.length; i++) {
                    this.grid[x + i][y] = ship;
                }

            } else {
                if (y + ship.length > 9) return false;

                for (let i = 0; i < ship.length; i++) {
                    if (this.grid[x][y + i] !== '') return false;
                }

                for (let i = 0; i < ship.length; i++) {
                    this.grid[x][y + i] = ship;
                }
            }
            ship.placed = true;
        },
        receiveAttack(x, y) {
            // If box was previously attacked
            if (this.grid[x][y] === -1) return;
            // If box is empty
            if (this.grid[x][y] === '') return this.grid[x][y] = -1;
            
            // Otherwise, ship is present 
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
        },
        checkIfReady() {
            if (
                this.carrier.placed === false
                || this.battleship.placed === false
                || this.destroyer.placed === false
                || this.submarine.placed === false
                || this.patrol.placed === false
                ) {
                    this.isReady = false;
                } else {
                    this.isReady = true;
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

export { Gameboard };