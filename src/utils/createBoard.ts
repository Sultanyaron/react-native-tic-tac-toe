import {PlayerTypes} from '../hooks/useTicTacToe';

const createBoard = (): PlayerTypes[] => Array(9).fill('');

export default createBoard;
