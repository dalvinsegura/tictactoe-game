// const canvas = {
//   rowOneColOne: "",
//   rowOneColTwo: "",
//   rowOneColThree: "",

//   rowTwoColOne: "",
//   rowTwoColTwo: "",
//   rowTwoColThree: "",

//   rowThreeColOne: "",
//   rowThreeColTwo: "",
//   rowThreeColThree: "",
// };

const checkIfPlayerOneWon = (canvas) => {
  let isTheWinner = false;

  // Rows
  if (
    canvas.rowOneColOne === "x" &&
    canvas.rowOneColTwo === "x" &&
    canvas.rowOneColThree === "x"
  )
    isTheWinner = true;
  if (
    canvas.rowTwoColOne === "x" &&
    canvas.rowTwoColTwo === "x" &&
    canvas.rowTwoColThree === "x"
  )
    isTheWinner = true;
  if (
    canvas.rowThreeColOne === "x" &&
    canvas.rowThreeColTwo === "x" &&
    canvas.rowThreeColThree === "x"
  )
    isTheWinner = true;

  // columns
  if (
    canvas.rowOneColOne === "x" &&
    canvas.rowTwoColOne === "x" &&
    canvas.rowThreeColOne === "x"
  )
    isTheWinner = true;
  if (
    canvas.rowOneColTwo === "x" &&
    canvas.rowTwoColTwo === "x" &&
    canvas.rowThreeColTwo === "x"
  )
    isTheWinner = true;
  if (
    canvas.rowOneColTwo === "x" &&
    canvas.rowTwoColTwo === "x" &&
    canvas.rowThreeColTwo === "x"
  )
    isTheWinner = true;

  // diagonal
  if (
    canvas.rowOneColOne === "x" &&
    canvas.rowTwoColTwo === "x" &&
    canvas.rowThreeColThree === "x"
  )
    isTheWinner = true;
  if (
    canvas.rowOneColThree === "x" &&
    canvas.rowTwoColTwo === "x" &&
    canvas.rowThreeColOne === "x"
  )
    isTheWinner = true;

  return isTheWinner;
};

const checkIfPlayerTwoWon = (canvas) => {
  let isTheWinner = false;
  // Rows
  if (
    canvas.rowOneColOne === "o" &&
    canvas.rowOneColTwo === "o" &&
    canvas.rowOneColThree === "o"
  )
    isTheWinner = true;
  if (
    canvas.rowTwoColOne === "o" &&
    canvas.rowTwoColTwo === "o" &&
    canvas.rowTwoColThree === "o"
  )
    isTheWinner = true;
  if (
    canvas.rowThreeColOne === "o" &&
    canvas.rowThreeColTwo === "o" &&
    canvas.rowThreeColThree === "o"
  )
    isTheWinner = true;

  // columns
  if (
    canvas.rowOneColOne === "o" &&
    canvas.rowTwoColOne === "o" &&
    canvas.rowThreeColOne === "o"
  )
    isTheWinner = true;
  if (
    canvas.rowOneColTwo === "o" &&
    canvas.rowTwoColTwo === "o" &&
    canvas.rowThreeColTwo === "o"
  )
    isTheWinner = true;
  if (
    canvas.rowOneColTwo === "o" &&
    canvas.rowTwoColTwo === "o" &&
    canvas.rowThreeColTwo === "o"
  )
    isTheWinner = true;

  // diagonal
  if (
    canvas.rowOneColOne === "o" &&
    canvas.rowTwoColTwo === "o" &&
    canvas.rowThreeColThree === "o"
  )
    isTheWinner = true;
  if (
    canvas.rowOneColThree === "o" &&
    canvas.rowTwoColTwo === "o" &&
    canvas.rowThreeColOne === "o"
  )
    isTheWinner = true;

  return isTheWinner;
};

const checkIfGameDraw = (canvas) => {
  return Object.keys(canvas).length > 8 &&
    !checkIfPlayerOneWon(canvas) &&
    !checkIfPlayerTwoWon(canvas)
    ? true
    : false;
};

export { checkIfPlayerOneWon, checkIfPlayerTwoWon, checkIfGameDraw };
