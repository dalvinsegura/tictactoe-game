// utils/ai.js
export const makeAIMove = (board) => {
  // Verificar si hay un movimiento ganador
  const winningMove = findWinningMove(board, "O");
  if (winningMove !== -1) return winningMove;

  // Bloquear el movimiento ganador del jugador
  const blockingMove = findWinningMove(board, "X");
  if (blockingMove !== -1) return blockingMove;

  // Tomar el centro si está disponible
  if (board[4] === null) return 4;

  // Tomar una esquina disponible
  const corners = [0, 2, 6, 8];
  const availableCorners = corners.filter((i) => board[i] === null);
  if (availableCorners.length > 0) {
    return availableCorners[
      Math.floor(Math.random() * availableCorners.length)
    ];
  }

  // Tomar cualquier espacio disponible
  const availableMoves = board.reduce((acc, cell, index) => {
    if (cell === null) acc.push(index);
    return acc;
  }, []);

  return availableMoves[Math.floor(Math.random() * availableMoves.length)];
};

const findWinningMove = (board, player) => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Filas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columnas
    [0, 4, 8],
    [2, 4, 6], // Diagonales
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] === player && board[b] === player && board[c] === null)
      return c;
    if (board[a] === player && board[c] === player && board[b] === null)
      return b;
    if (board[b] === player && board[c] === player && board[a] === null)
      return a;
  }

  return -1;
};
