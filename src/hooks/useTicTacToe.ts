import {useState} from 'react';
import checkIfTie from '../utils/checkIfTie';
import createBoard from '../utils/createBoard';
import validateBoard from '../utils/validateBoard';

export type PlayerTypes = 'X' | 'O';
type GameStatus = 'playing' | 'winner' | 'tie';

const useTicTacToe = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>('playing');
  const [currentPlayer, setCurrentPlayer] = useState<PlayerTypes>('O');
  const [board, setBoard] = useState(() => createBoard());
  const [winner, setWinner] = useState<PlayerTypes | null>(null);

  const setMark = (index: number) => {
    if (gameStatus === 'playing') {
      const updatedBoard = [...board];
      updatedBoard[index] = currentPlayer;
      setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
      setBoard(updatedBoard);
      const aWinner = validateBoard(updatedBoard);
      if (aWinner) {
        setWinner(aWinner);
        setGameStatus('winner');
      } else if (checkIfTie(updatedBoard)) {
        setGameStatus('tie');
      }
    }
  };

  const resetGame = () => {
    setBoard(createBoard());
    setGameStatus('playing');
    setCurrentPlayer('O');
    setWinner(null);
  };

  return {
    board,
    setMark,
    winner,
    gameStatus,
    resetGame,
  };
};

export default useTicTacToe;
