import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Button} from 'react-native';
import useTicTacToe from './hooks/useTicTacToe';

const App = () => {
  const {board, setMark, winner, gameStatus, resetGame} = useTicTacToe();
  return (
    <View style={styles.container}>
      {winner && <Text>Winner is: {winner}</Text>}
      {gameStatus === 'tie' && <Text>Tie, try again!</Text>}
      <View style={styles.board}>
        {board.map((value, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cell}
            onPress={() => !value && setMark(index)}
            disabled={gameStatus !== 'playing'}>
            <Text style={styles.value}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button onPress={resetGame} title="Reset game" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    flexWrap: 'wrap',
    height: 300,
    width: 300,
    marginBottom: 20,
    marginTop: 20,
  },
  cell: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  value: {
    fontSize: 40,
  },
});

export default App;
