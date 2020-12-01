import {PlayerTypes} from '../hooks/useTicTacToe';

export const possibleWinIndexes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const validateBoard = (board: PlayerTypes[]): PlayerTypes | null => {
  for (let i = 0; i < possibleWinIndexes.length; i++) {
    const [a, b, c] = possibleWinIndexes[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default validateBoard;
