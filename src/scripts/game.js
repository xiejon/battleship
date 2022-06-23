import { Player, ComputerPlayer } from './player.js';

const Game = () => {
  const user = new Player();
  const computer = new ComputerPlayer();
  return {
    user,
    computer,
    startGame() {
      user.turn = true;
      computer.placeShipsRandom();
    },
  };
};

const game = Game();

export { game };
