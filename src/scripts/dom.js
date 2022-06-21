import { Player, ComputerPlayer } from './player.js';

const Dom = () => {
    return {
        renderGrids(user, computer) {
            const userGrid = document.querySelector('.player-grid');
            const computerGrid = document.querySelector('.computer-grid');

            this.createBoxes(user, userGrid);
            this.createBoxes(computer, computerGrid);

            const playerBoard = document.querySelectorAll('.player .box');
            const computerBoard = document.querySelectorAll('.computer .box');

            this.addListeners(computerBoard, user, computer);
            this.addListeners(playerBoard, computer, user);
        },
        createBoxes(player, container) {
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
        }, 
        addListeners(enemyBoard, p1, p2) {
            for (let box of enemyBoard) {
                box.addEventListener('click', e => {
                    if (!p1.turn || e.target.getAttribute('clicked') === 'true') return;
                    const id = e.target.getAttribute('data-id');
                    const x = id.charAt(0);
                    const y = id.charAt(1);

                    p1.attack(p2, x, y);
                    box.style.backgroundColor = '';

                    // Prevent square from being clicked twice
                    e.target.setAttribute('clicked', 'true');

                    console.log(p1);
                    console.log(p2);
                });
            }
        },
  
        renderShips(player) {
            const grid = player.board.grid;
            for (let x = 0; x < grid.length; x++) {
                for (let y = 0; y < grid.length; y++) {
                    if (grid[x][y] !== '' && grid[x][y] !== -1) {
                        const box = document.querySelector(`[data-id="${x}${y}"]`);
                        box.style.backgroundColor = 'blue';
                    }
                }
            }
        },
        tempRenderCompShips(grid) {
            for (let x = 0; x < grid.length; x++) {
                for (let y = 0; y < grid.length; y++) {
                    if (grid[x][y] !== '' && grid[x][y] !== -1) {
                        const box = document.querySelector(`.computer [data-id="${x}${y}"]`);
                        box.style.backgroundColor = 'blue';
                    }
                }
            }
        }

    }    
}

export { Dom };