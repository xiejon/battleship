import { game } from './game.js';
import RotateIcon from '../styles/images/rotate.svg';
import RotateCwIcon from '../styles/images/rotate-cw.svg';

function renderBoards(user, computer) {
  const computerGrid = document.querySelector('.computer-grid');
  const popupGrid = document.querySelector('.popup-grid');
  const userGrid = document.querySelector('.player-grid');

  togglePopup();
  renderGameboard(popupGrid);
  renderGameboard(computerGrid);
  renderGameboard(userGrid);
  attachBoardListeners(user, computer);
}

function attachBoardListeners(user, computer) {
  const computerBoard = document.querySelectorAll('.computer .box');

  for (const box of computerBoard) {
    box.addEventListener('click', (e) => {
      if (!user.turn || e.target.getAttribute('clicked') === 'true') return;

      userAttack(box, e, user, computer);
      if (computer.board.fleetSunk) {
        alert('You Win!');
        resetBoard(user, computer);
        return;
      }

      computerAttack(computer, user);
      if (user.board.fleetSunk) {
        alert('Computer Wins!');
        resetBoard(user, computer);
      }
    });
  }
}

function attachPopupListeners() {
  const startBtn = document.querySelector('.start');
  const userGrid = document.querySelector('.player-grid');
  const rotateIcon = document.querySelector('.popup-header img');
  const popupGrid = document.querySelector('.popup-grid');
  const popupBoard = document.querySelectorAll('.popup-grid .box');

  for (const box of popupBoard) {
    box.addEventListener('mouseover', (e) => {
      showShip(e, game.user); // Show outline of ship on mouse hover
    });

    box.addEventListener('click', (e) => {
      const placedShip = positionShip(e, game.user); // Place ship at selected location
      if (placedShip === false) return;
      updateInstructions(game.user); // Update popup description
      renderShips(game.user, popupGrid);
      game.user.board.checkIfReady();
    });
  }

  rotateIcon.addEventListener('click', () => {
    if (game.user.board.landscape) {
      game.user.board.landscape = false;
      rotateIcon.src = RotateCwIcon;
    } else {
      game.user.board.landscape = true;
      rotateIcon.src = RotateIcon;
    }
  });

  startBtn.addEventListener('click', () => {
    if (!game.user.board.isReady) throw new Error('Error: Please place all your ships before continuing.');

    togglePopup();
    renderShips(game.user, userGrid);
  });
}

function togglePopup() {
  const bg = document.querySelector('.background');
  const popup = document.querySelector('.popup');
  if (bg.style.display === 'flex' && popup.style.display === 'flex') {
    // Hide
    bg.style.display = 'none';
    popup.style.display = 'none';
  } else {
    // Show
    bg.style.display = 'flex';
    popup.style.display = 'flex';
  }
}

function showShip(e, user) {
  const { board } = user;
  if (!board.carrier.placed) {
    highlightBoxes(board.carrier);
  } else if (!board.battleship.placed) {
    highlightBoxes(board.battleship);
  } else if (!board.destroyer.placed) {
    highlightBoxes(board.destroyer);
  } else if (!board.submarine.placed) {
    highlightBoxes(board.submarine);
  } else if (!board.patrol.placed) {
    highlightBoxes(board.patrol);
  }

  // Highlight squares on mouse hover
  function highlightBoxes(ship) {
    const grid = document.querySelectorAll('.popup .box');
    const coords = getCoords(e);
    const x = parseInt(coords[0]);
    const y = parseInt(coords[1]);

    // Remove previously highlighted squares
    for (const box of grid) {
      if (box.hasAttribute('highlighted')) box.style.backgroundColor = '';
    }

    if (board.landscape) {
      for (let i = 0; i < ship.length; i++) {
        if (x + i > 9) return; // Prevents query selector from returning null
        const box = document.querySelector(`[data-id="${x + i}${y}"]`);
        if (box.hasAttribute('ship-present')) return; // Do not highlight if there is a ship at the square
        box.style.backgroundColor = (x + ship.length > 10) ? '#8B0000' : '#483C32';
        box.setAttribute('highlighted', '');
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        if (y + i > 9) return;
        const box = document.querySelector(`[data-id="${x}${y + i}"]`);
        if (box.hasAttribute('ship-present')) return;
        box.style.backgroundColor = (y + ship.length > 10) ? '#8B0000' : '#483C32';
        box.setAttribute('highlighted', '');
      }
    }
  }
}

function positionShip(e, user) {
  const { board } = user;
  const coords = getCoords(e);
  const x = parseInt(coords[0]);
  const y = parseInt(coords[1]);

  if (!board.carrier.placed) {
    return board.placeShip(board.carrier, x, y);
  } if (!board.battleship.placed) {
    return board.placeShip(board.battleship, x, y);
  } if (!board.destroyer.placed) {
    return board.placeShip(board.destroyer, x, y);
  } if (!board.submarine.placed) {
    return board.placeShip(board.submarine, x, y);
  } if (!board.patrol.placed) {
    return board.placeShip(board.patrol, x, y);
  }
}

function updateInstructions(user) {
  const { board } = user;
  const desc = document.querySelector('.popup-header p');
  if (board.carrier.placed) desc.textContent = 'Position your battleship.';
  if (board.battleship.placed) desc.textContent = 'Position your destroyer.';
  if (board.destroyer.placed) desc.textContent = 'Position your submarine.';
  if (board.submarine.placed) desc.textContent = 'Position your patrol ship.';
  if (board.patrol.placed) desc.textContent = 'Ready for battle.';
}

function userAttack(box, e, user, enemy) {
  // Get coordinates of chosen attack site
  const coords = getCoords(e);
  const x = coords[0];
  const y = coords[1];

  user.attack(enemy, x, y);
  renderAttack(box, enemy, x, y);

  e.target.setAttribute('clicked', 'true'); // Prevent square from being clicked twice
}

function computerAttack(computer, enemy) {
  const coords = computer.randomAttack(enemy);
  const x = coords[0];
  const y = coords[1];

  const box = document.querySelector(`.player-grid [data-id="${x}${y}"]`);

  renderAttack(box, enemy, x, y);
}

function resetBoard(user, computer) {
  const boxes = document.querySelectorAll('.box');

  for (const box of boxes) {
    box.style.backgroundColor = '';
    box.removeAttribute('ship-present');
    box.removeAttribute('highlighted');
    box.removeAttribute('clicked');
  }

  computer.computerReset();
  user.reset();
  togglePopup();
  updateInstructions(user);
  game.startGame();
}

function getCoords(e) {
  const id = e.target.getAttribute('data-id');
  const x = id.charAt(0);
  const y = id.charAt(1);
  return [x, y];
}

function renderGameboard(container) {
  for (let x = 0; x < 10; x++) {
    // Create columns to insert boxes into (to help with positioning)
    const column = document.createElement('div');
    column.classList.add('column');
    column.setAttribute('id', `${x}`);
    container.appendChild(column);

    for (let y = 0; y < 10; y++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.setAttribute('data-id', `${x}` + `${y}`);
      column.appendChild(box);
    }
  }
}

function renderAttack(box, enemy, x, y) {
  if (enemy.board.grid[x][y] === -1) {
    // Missed shot
    box.style.backgroundColor = '#483C32';
  } else {
    // Hit ship
    box.style.backgroundColor = '#8B0000';
  }
}

function renderShips(player, gridContainer) {
  const { grid } = player.board;
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid.length; y++) {
      if (grid[x][y] !== '' && grid[x][y] !== -1) {
        const box = gridContainer.querySelector(`[data-id="${x}${y}"]`);
        box.style.backgroundColor = '#005CAD';

        // Remove 'highlighted' data attribute
        box.removeAttribute('highlighted');

        // Add 'ship-present' data attribute to prevent futher highlighting
        box.setAttribute('ship-present', '');
      }
    }
  }
}

function renderRotateIcon() {
  const popupHeader = document.querySelector('.popup-header');

  // Button to change ship orientation
  const rotateIcon = new Image();
  rotateIcon.src = RotateIcon;
  popupHeader.append(rotateIcon);
}

function renderGithubIcon() {
  const a = document.createElement('a');
  a.href = 'https://github.com/xiejon';

  const footer = document.querySelector('.footer');
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  iconSvg.setAttribute('width', '24');
  iconSvg.setAttribute('height', '24');
  iconSvg.setAttribute('viewbox', '0 0 24 24');
  iconPath.setAttribute('d', 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z');

  a.append(iconSvg);
  iconSvg.appendChild(iconPath);
  footer.append(a);
}

renderRotateIcon();
renderGithubIcon();

export {
  renderBoards, attachPopupListeners
};
