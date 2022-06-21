const Ship = (len) => {
    const length = len;
    let hits = 0;
    let sunk = false;
    let placed = false;

    return {
        length,
        hits,
        sunk,
        placed,
        hit() {
            this.hits++;
        },
        isSunk() {
            if (this.hits >= this.length) this.sunk = true;
        }
    }
}

module.exports = {
    Ship
}