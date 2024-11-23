import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../../theme";

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

const Game = ({ mode, onBackToMenu }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    checkWinner();
  }, [board]);

  const handleCellPress = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWinner = () => {
    for (let combo of WINNING_COMBINATIONS) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
    if (board.every((cell) => cell !== null)) {
      setWinner("draw");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  const renderCell = (index) => (
    <TouchableOpacity
      key={index}
      style={styles.cell}
      onPress={() => handleCellPress(index)}
      disabled={!!board[index] || !!winner}
    >
      <Text
        style={[
          styles.cellText,
          {
            color:
              board[index] === "X"
                ? theme.colors.primary
                : theme.colors.secondary,
          },
        ]}
      >
        {board[index]}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.gameTitle}>Tic-Tac-Toe</Text>

      <View style={styles.playerInfo}>
        <Text style={styles.playerText}>
          {winner
            ? winner === "draw"
              ? "Empate!"
              : `${winner} ha ganado!`
            : `Turno de ${currentPlayer}`}
        </Text>
      </View>

      <View style={styles.board}>
        {[0, 1, 2].map((row) => (
          <View key={row} style={styles.row}>
            {[0, 1, 2].map((col) => renderCell(row * 3 + col))}
          </View>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={resetGame}>
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onBackToMenu}>
          <Text style={styles.buttonText}>Menú Principal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,
    padding: 20,
  },
  gameTitle: {
    fontSize: 36,
    color: theme.colors.primary,
    fontWeight: "bold",
    marginBottom: 20,
  },
  playerInfo: {
    marginBottom: 20,
  },
  playerText: {
    fontSize: 24,
    color: theme.colors.text,
    fontWeight: "bold",
  },
  board: {
    borderWidth: 2,
    borderColor: theme.colors.border,
    borderRadius: 10,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  cellText: {
    fontSize: 48,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: theme.colors.textDark,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Game;
