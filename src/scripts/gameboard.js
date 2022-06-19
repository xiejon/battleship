import { Ship } from "./ship.js";

// '' = empty square
// -1 = missed attack
// 0 = ship present
// 1 = ship hit

const Gameboard = () => {
    let landscape = true;
    const grid = createGrid(10);

    const carrier = Ship(5);
    const battleship = Ship(4);
    const destroyer = Ship(3);
    const submarine = Ship(3);
    const patrol = Ship(2);

    return {
        grid,
        landscape,
        carrier,
        battleship,
        destroyer,
        submarine,
        patrol,

        placeShip(ship, x, y) {
            if (this.landscape === true) {
                for (let i = 0; i < ship.length; i++) {
                    this.grid[i][y] = ship;
                }
            } else {
                for (let i = 0; i < ship.length; i++) {
                    this.grid[x][i] = ship;
                }
            }
        },
        receiveAttack(x, y) {
            // const coords = this.grid[x][y];
            if (this.grid[x][y] === -1) return;
            if (this.grid[x][y] === '') {
                this.grid[x][y] = -1;
                return;
            }
            
            const ship = this.grid[x][y];
            ship.hit();
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