import { Ship } from "./ship.js";

const Gameboard = () => {
    let landscape = true;
    const grid = createGrid(10);
    
    return {
        landscape,
        grid,

        placeShip(len, xVal, yVal) {
            const newShip = Ship(len);
            
            if (this.landscape === true) {
                for (let i = 0; i < len; i++) {
                    this.grid[i][yVal] = 0;
                }
            } else {
                for (let i = 0; i < len; i++) {
                    this.grid[xVal][i] = 0;
                }
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