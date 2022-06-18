const Ship = (len) => {
    const length = len;
    let hitGrid = initializeHitGrid(len);
    let sunk = false;

    return {
        length,
        hitGrid,
        sunk, 

        hit(num) {
            this.hitGrid[`${num}`] = true;
        },
        isSunk(len) {
            for (let i = 0; i < len; i++) {
                if (this.hitGrid[`${i}`] === false) return;
            }
            this.sunk = true;
        }
    }
}

function initializeHitGrid(length) {
    let grid = [{}];
    for (let i = 0; i < length; i++) {
        grid[`${i}`] = false;
    }
    return grid;
}

module.exports = {
    Ship
}