import {PlayerTypes} from '../hooks/useTicTacToe';

const checkIfTie = (board: PlayerTypes[]) => board.every((value) => !!value);

export default checkIfTie;
