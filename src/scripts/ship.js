const Ship = (len) => {
    const length = len;
    let hitLoc = initializeHitLocs(len);
    let sunk = false;

    return {
        length,
        hitLoc,
        sunk, 

        hit(num) {
            this.hitLoc[`${num}`] = true;
        }
    }
}

function initializeHitLocs(length) {
    let locs = [{}];
    for (let i = 0; i < length; i++) {
        locs[`${i}`] = false;
    }
    return locs;
}

module.exports = {
    Ship
}