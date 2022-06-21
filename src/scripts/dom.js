const Dom = () => {
    return {
        renderGrids(grid) {
            const playerGrid = document.querySelector('.player-grid');
            const computerGrid = document.querySelector('.computer-grid');

            this.createBoxes(grid, playerGrid);
            this.createBoxes(grid, computerGrid);
        },
        createBoxes(grid, parent) {
            for (let col = 0; col < grid.length; col++) {
                // Create columns to insert boxes into (to help with positioning)
                const column = document.createElement('div');

                column.classList.add(`column`);
                column.setAttribute('id', `${col}`)

                parent.appendChild(column);

                for (let row = 0; row < grid.length; row++) {
                    const box = document.createElement('div');

                    box.classList.add('box');
                    box.setAttribute('data-id', `${col}`+ `${row}`);

                    // temporary
                    box.textContent = `${col}`+ `${row}`

                    column.appendChild(box);
                }
            }
        }, 
        renderShips(grid) {
            for (let x = 0; x < grid.length; x++) {
                for (let y = 0; y < grid.length; y++) {
                    if (grid[x][y] !== '' && grid[x][y] !== -1) {
                        const box = document.querySelector(`[data-id="${x}${y}"]`);
                        box.style.backgroundColor = 'blue';
                    }
                }
            }
        }

    }    
}

export { Dom };