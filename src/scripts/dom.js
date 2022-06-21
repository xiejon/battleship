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
                // Create columns to insert boxes into (for correct styling)
                const column = document.createElement('div');

                column.classList.add(`column`);
                column.setAttribute('id', `${col}`)

                parent.appendChild(column);

                for (let row = 0; row < grid.length; row++) {
                    const box = document.createElement('div');

                    box.classList.add('box');
                    box.setAttribute('id', `${col}`+ `${row}`);

                    // temporary
                    box.textContent = `${col}`+ `${row}`

                    column.appendChild(box);
                }
            }
        },
        sortBoxes(boxes) {
            for (let i = 0; i < 10; i++) {
                const column = document.createElement('div');
                column.classList.add(`column${i}`);
            }
            for (let i = 0; i < boxes.length; i++) {

            }
        }
    }    
}

export { Dom };