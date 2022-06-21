import { Player, ComputerPlayer } from './player.js';

function renderBoards(user, computer) {
    const userGrid = document.querySelector('.player-grid');
    const computerGrid = document.querySelector('.computer-grid');

    createBoxes(user, userGrid);
    createBoxes(computer, computerGrid);

    const playerBoard = document.querySelectorAll('.player .box');
}

function getCoords(e) {
    const id = e.target.getAttribute('data-id');
    const x = id.charAt(0);
    const y = id.charAt(1);
    return [x, y];
}

function createBoxes(player, container) {
    for (let x = 0; x < player.board.grid.length; x++) {
        // Create columns to insert boxes into (to help with positioning)
        const column = document.createElement('div');
        column.classList.add(`column`);
        column.setAttribute('id', `${x}`)
        container.appendChild(column);

        for (let y = 0; y < player.board.grid.length; y++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.setAttribute('data-id', `${x}`+ `${y}`);

            // temporary
            box.textContent = `${x}`+ `${y}`
            column.appendChild(box);
        }
    }
} 

function renderHitOrMiss(box, enemy, x, y) {
    if (enemy.board.grid[x][y] === -1) {
        // Missed shot
        box.style.backgroundColor = 'gray';
    } else {
        // Hit ship
        box.style.backgroundColor = '';
    }
}

function getBox(x, y) {
   return document.querySelector(`[data-id="${x}${y}"]`);
}

function renderShips(player) {
    const grid = player.board.grid;
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid.length; y++) {
            if (grid[x][y] !== '' && grid[x][y] !== -1) {
                const box = document.querySelector(`[data-id="${x}${y}"]`);
                box.style.backgroundColor = 'blue';
            }
        }
    }
}

function tempRenderCompShips(grid) {
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid.length; y++) {
            if (grid[x][y] !== '' && grid[x][y] !== -1) {
                const box = document.querySelector(`.computer [data-id="${x}${y}"]`);
                box.style.backgroundColor = 'blue';
            }
        }
    }
}

  


export { renderBoards, getCoords, getBox, renderHitOrMiss, renderShips, tempRenderCompShips };