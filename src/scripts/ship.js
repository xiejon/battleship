const Ship = (len) => {
  const length = len;
  const hits = 0;
  const sunk = false;
  const placed = false;

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
    },
  };
};

module.exports = {
  Ship,
};
