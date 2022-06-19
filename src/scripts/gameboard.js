import { Ship } from "./ship.js";

const Gameboard = () => {
    const grid = createGrid(10);
    
    return {
        grid
    }
}

function createGrid(num) {
    let grid = [];
    // columns
    for (let i = 0; i < num; i++) {
        grid[i] = [];
        // rows
        for (let j = 0; j < num; j++) {
            grid[i][j] = 0;
        }
    }
    return grid;
}

module.exports = {
    Gameboard
}