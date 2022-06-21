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
                for (let row = 0; row < grid.length; row++) {
                    const box = document.createElement('div');

                    box.setAttribute('id', `${col}`+ `${row}`);

                    parent.appendChild(box);
                }
            }
        }
    }    
}

export { Dom };