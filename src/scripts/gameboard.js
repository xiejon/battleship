import { Ship } from "./ship.js";

// -1 = empty square
// 0 = ship present
// 1 = ship hit

const Gameboard = () => {
    let landscape = true;
    const grid = createGrid(10);
    
    return {
        landscape,
        grid,

        placeShip(len, x, y) {
            const newShip = Ship(len);
            
            if (this.landscape === true) {
                for (let i = 0; i < len; i++) {
                    this.grid[i][y] = 0;
                }
            } else {
                for (let i = 0; i < len; i++) {
                    this.grid[x][i] = 0;
                }
            }
            // return newShip?
        },
        receiveAttack(x, y) {
            // const coords = this.grid[x][y];
            if (this.grid[x][y] === -1) {
                return;
            } else if (this.grid[x][y] === 0) {
                this.grid[x][y] = 1;
            }
        }
    }
}

function createGrid(num) {
    let grid = [];
    for (let col = 0; col < num; col++) {
        grid[col] = [];

        for (let row = 0; row < num; row++) {
            grid[col][row] = -1;
        }
    }
    return grid;
}

module.exports = {
    Gameboard
}