import { Player, ComputerPlayer } from './player.js';
import RotateIcon from '../styles/images/rotate.svg';
import RotateCwIcon from '../styles/images/rotate-cw.svg';

function renderBoards(user, computer) {
    const userGrid = document.querySelector('.player-grid');
    const computerGrid = document.querySelector('.computer-grid');

    const boardListeners = () => {
        const computerBoard = document.querySelectorAll('.computer .box');
        for (let box of computerBoard) {
            box.addEventListener('click', e => {
                if (!user.turn || e.target.getAttribute('clicked') === 'true') return;

                userAttack(box, e, user, computer);
                // Prevent square from being clicked twice
                e.target.setAttribute('clicked', 'true');

                // Computer attacks back
                computerAttack(computer, user);
            });
        }
    }

    displayPopup(user);
    createGrid(computer, computerGrid);
    boardListeners();
}

function displayPopup(user) {
    const popupHeader = document.querySelector('.popup-header');
    const selectionGrid = document.querySelector('.popup-grid');

    // Button to rotate ship
    const rotateIcon = new Image();
    rotateIcon.src = RotateIcon;
    popupHeader.append(rotateIcon);
    rotateIcon.addEventListener('click', () => {
        if (user.board.landscape) {
            user.board.landscape = false;
            rotateIcon.src = RotateCwIcon;
        } else {
            user.board.landscape = true;
            rotateIcon.src = RotateIcon;
        }
    })

    // Grid to place ships
    createGrid(user, selectionGrid);

    const popupListeners = () => {
        const selectionBoard = document.querySelectorAll('.popup-grid .box');
        for (let box of selectionBoard) {
            box.addEventListener('click', (e) => {
                const placedShip = positionShip(e, user);
                if (placedShip === false) return;

                updateInstructions(user);
                renderShips(user);
                user.board.checkIfReady();
            })
        }
    }
    popupListeners();
}

function positionShip(e, user) {
    const board = user.board;
    const coords = getCoords(e);
    const x = parseInt(coords[0]);
    const y = parseInt(coords[1]);

    if (!board.carrier.placed) {
        return board.placeShip(board.carrier, x, y);
    } else if (!board.battleship.placed) {
        return board.placeShip(board.battleship, x, y);
    } else if (!board.destroyer.placed) {
        return board.placeShip(board.destroyer, x, y);
    } else if (!board.submarine.placed) {
        return board.placeShip(board.submarine, x, y);
    } else if (!board.patrol.placed) {
        return board.placeShip(board.patrol, x, y);
    }
}

function updateInstructions(user) {
    const board = user.board;
    const desc = document.querySelector('.popup-header p');
    if (board.carrier.placed) desc.textContent = "Position your battleship."
    if (board.battleship.placed) desc.textContent = "Position your destroyer."
    if (board.destroyer.placed) desc.textContent = "Position your submarine."
    if (board.submarine.placed) desc.textContent = "Position your patrol ship."
    if (board.patrol.placed) desc.textContent = "Ready for battle."
}

function userAttack(box, e, user, enemy) {
    // Get coordinates of chosen attack site
    const coords = getCoords(e);
    const x = coords[0];
    const y = coords[1];

    user.attack(enemy, x, y);
    renderAttack(box, enemy, x, y);

    if (enemy.board.fleetSunk) alert('You Win!');
}

function computerAttack(computer, enemy) {
    const coords = computer.randomAttack(enemy);
    const x = coords[0];
    const y = coords[1];

    const box = document.querySelector(`[data-id="${x}${y}"]`);

    renderAttack(box, enemy, x, y);

    if (enemy.board.fleetSunk) alert('Computer Wins!');
}

function getCoords(e) {
    const id = e.target.getAttribute('data-id');
    const x = id.charAt(0);
    const y = id.charAt(1);
    return [x, y];
}

function createGrid(player, container) {
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
            column.appendChild(box);

            // temporary
            box.textContent = `${x}`+ `${y}`
        }
    }
} 

function renderAttack(box, enemy, x, y) {
    if (enemy.board.grid[x][y] === -1) {
        // Missed shot
        box.style.backgroundColor = 'gray';
    } else {
        // Hit ship
        box.style.backgroundColor = '';
    }
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

// function tempRenderCompShips(grid) {
//     for (let x = 0; x < grid.length; x++) {
//         for (let y = 0; y < grid.length; y++) {
//             if (grid[x][y] !== '' && grid[x][y] !== -1) {
//                 const box = document.querySelector(`.computer [data-id="${x}${y}"]`);
//                 box.style.backgroundColor = 'blue';
//             }
//         }
//     }
// }

  


export { renderBoards, getCoords, renderAttack, renderShips };