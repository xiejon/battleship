import './styles/styles.css';
import { game } from './scripts/game.js';
import { attachPopupListeners, renderBoards } from './scripts/dom.js';

game.startGame();
renderBoards(game.user, game.computer);
attachPopupListeners();
