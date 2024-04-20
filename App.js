import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useState, useEffect } from "react";
import {
  checkIfGameDraw,
  checkIfPlayerOneWon,
  checkIfPlayerTwoWon,
} from "./patternToWin";

const POSITIONS = {
  canvasRowOneColOne: "canvasRowOneColOne",
  canvasRowOneColTwo: "canvasRowOneColTwo",
  canvasRowOneColThree: "canvasRowOneColThree",

  canvasRowTwoColOne: "canvasRowTwoColOne",
  canvasRowTwoColTwo: "canvasRowTwoColTwo",
  canvasRowTwoColThree: "canvasRowTwoColThree",

  canvasRowThreeColOne: "canvasRowThreeColOne",
  canvasRowThreeColTwo: "canvasRowThreeColTwo",
  canvasRowThreeColThree: "canvasRowThreeColThree",
};

const BoxPressable = ({ customStyle, onPress, piece }) => {
  return (
    <Pressable onPress={onPress} style={[customStyle, styles.boxes]}>
      <Text
        style={
          piece === "x"
            ? [{ color: "red" }, styles.pieces]
            : [{ color: "purple" }, styles.pieces]
        }
      >
        {piece}
      </Text>
    </Pressable>
  );
};

export default function App() {
  const [canvas, setCanvas] = useState({});

  const [player1, setPlayer1] = useState({
    wins: 0,
    piece: "x",
    name: "",
    isMyTurn: true,
  });

  const [player2, setPlayer2] = useState({
    wins: 0,
    piece: "o",
    name: "",
    isMyTurn: false,
  });

  const [players, setPlayers] = useState([player1, player2]);

  const [winner, setWinner] = useState({
    playerOne: false,
    playerTwo: false,
  });

  const [isDrawGame, setDrawGame] = useState(false);

  const [pieceToPlace, setPieceToPlace] = useState("");

  const turnRotate = () => {
    setPlayer1({ ...player1, isMyTurn: player1.isMyTurn ? false : true });
    setPlayer2({ ...player2, isMyTurn: player2.isMyTurn ? false : true });
    setPlayers([player1, player2]);
  };

  useEffect(() => {
    setWinner({
      playerOne: checkIfPlayerOneWon(canvas),
      playerTwo: checkIfPlayerTwoWon(canvas),
    });
    setDrawGame(checkIfGameDraw(canvas));
  }, [players]);

  const canvasUpdater = (position) => {
    let piece = "";
    turnRotate();

    players.forEach((player) => {
      if (player.isMyTurn) {
        console.log("piece: ", player.piece);
        setPieceToPlace(player.piece);
      }
    });

    switch (position) {
      case POSITIONS.canvasRowOneColOne:
        if (!canvas?.rowOneColOne) {
          setCanvas({ ...canvas, rowOneColOne: pieceToPlace });
          // turnRotate();
        }

        break;

      case POSITIONS.canvasRowOneColTwo:
        if (!canvas?.rowOneColTwo) {
          setCanvas({ ...canvas, rowOneColTwo: pieceToPlace });
          // turnRotate();
        }

        break;

      case POSITIONS.canvasRowOneColThree:
        if (!canvas?.rowOneColThree) {
          setCanvas({ ...canvas, rowOneColThree: pieceToPlace });
          // turnRotate();
        }
        break;

      case POSITIONS.canvasRowTwoColOne:
        if (!canvas?.rowTwoColOne) {
          setCanvas({ ...canvas, rowTwoColOne: pieceToPlace });
          // turnRotate();
        }

        break;

      case POSITIONS.canvasRowTwoColTwo:
        if (!canvas?.rowTwoColTwo) {
          setCanvas({ ...canvas, rowTwoColTwo: pieceToPlace });
          // turnRotate();
        }

        break;

      case POSITIONS.canvasRowTwoColThree:
        if (!canvas?.rowTwoColThree) {
          setCanvas({ ...canvas, rowTwoColThree: pieceToPlace });
          // turnRotate();
        }
        break;

      case POSITIONS.canvasRowThreeColOne:
        if (!canvas?.rowThreeColOne) {
          setCanvas({ ...canvas, rowThreeColOne: pieceToPlace });
          // turnRotate();
        }

        break;

      case POSITIONS.canvasRowThreeColTwo:
        if (!canvas?.rowThreeColTwo) {
          setCanvas({ ...canvas, rowThreeColTwo: pieceToPlace });
          // turnRotate();
        }

        break;

      case POSITIONS.canvasRowThreeColThree:
        if (!canvas?.rowThreeColThree) {
          setCanvas({ ...canvas, rowThreeColThree: pieceToPlace });
          // turnRotate();
        }

        break;
      default:
        break;
    }
  };

  const handleResetCanvas = () => {
    setCanvas({});

    setPlayer1({
      wins: 0,
      piece: "x",
      name: "",
      isMyTurn: true,
    });
    setPlayer2({
      wins: 0,
      piece: "o",
      name: "",
      isMyTurn: false,
    });

    setPlayers([player1, player2]);
  };

  return (
    // I'm gonna develop a tic tac toe game simple version
    <View style={styles.container}>
      <Text style={styles.gameTitle}>KLK CON X</Text>

      {winner.playerOne || winner.playerTwo ? (
        <Text style={styles.winnerMessage}>
          {winner.playerOne
            ? "El jugador 1 ha ganado"
            : "El jugado 2 ha ganado"}
        </Text>
      ) : null}

      {isDrawGame && <Text style={styles.drawText}>EMPATE</Text>}

      <View style={styles.playerStatsContainer}>
        <View style={styles.playerContainer}>
          <View>
            <Text style={styles.piecePlayerX}>X</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              marginLeft: 15,
            }}
          >
            <Text style={styles.playerName}>Jugador 1</Text>
            {player1.isMyTurn && !winner.playerOne && !winner.playerTwo && (
              <Text style={styles.itYourTurnText}>¡Es turno!</Text>
            )}

            {!player1.isMyTurn && winner.playerOne && (
              <Text style={styles.winnerBoxText}>TU ERE' DURO</Text>
            )}
          </View>
        </View>

        <View style={styles.playerContainer}>
          <View>
            <Text style={styles.piecePlayerO}>O</Text>
          </View>
          <View
            style={{
              flexDirection: "",
              justifyContent: "space-around",
              marginLeft: 15,
            }}
          >
            <Text style={styles.playerName}>Jugador 2</Text>
            {player2.isMyTurn && !winner.playerTwo && !winner.playerOne && (
              <Text style={styles.itYourTurnText}>¡Es turno!</Text>
            )}

            {!player2.isMyTurn && winner.playerTwo && (
              <Text style={styles.winnerBoxText}>TU ERE' DURO</Text>
            )}
          </View>
        </View>
      </View>

      <View style={styles.canvas}>
        <View style={styles.canvasRowOne}>
          <BoxPressable
            piece={canvas?.rowOneColOne}
            customStyle={styles.canvasRowOneColOne}
            onPress={() => canvasUpdater("canvasRowOneColOne")}
          />

          <BoxPressable
            piece={canvas?.rowOneColTwo}
            customStyle={styles.canvasRowOneColTwo}
            onPress={() => canvasUpdater("canvasRowOneColTwo")}
          />

          <BoxPressable
            piece={canvas?.rowOneColThree}
            customStyle={styles.canvasRowOneColThree}
            onPress={() => canvasUpdater("canvasRowOneColThree")}
          />
        </View>

        <View style={styles.canvasRowTwo}>
          <BoxPressable
            piece={canvas?.rowTwoColOne}
            customStyle={styles.canvasRowTwoColOne}
            onPress={() => canvasUpdater("canvasRowTwoColOne")}
          />

          <BoxPressable
            piece={canvas?.rowTwoColTwo}
            customStyle={styles.canvasRowTwoColTwo}
            onPress={() => canvasUpdater("canvasRowTwoColTwo")}
          />

          <BoxPressable
            piece={canvas?.rowTwoColThree}
            customStyle={styles.canvasRowTwoColThree}
            onPress={() => canvasUpdater("canvasRowTwoColThree")}
          />
        </View>

        <View style={styles.canvasRowThree}>
          <BoxPressable
            piece={canvas?.rowThreeColOne}
            customStyle={styles.canvasRowThreeColOne}
            onPress={() => canvasUpdater("canvasRowThreeColOne")}
          />

          <BoxPressable
            piece={canvas?.rowThreeColTwo}
            customStyle={styles.canvasRowThreeColTwo}
            onPress={() => canvasUpdater("canvasRowThreeColTwo")}
          />

          <BoxPressable
            piece={canvas?.rowThreeColThree}
            customStyle={styles.canvasRowThreeColThree}
            onPress={() => canvasUpdater("canvasRowThreeColThree")}
          />
        </View>
      </View>

      <Pressable style={styles.resetBtn} onPress={handleResetCanvas}>
        <Text style={styles.resetBtnText}>Restart</Text>
      </Pressable>

      <Image
        style={styles.developerLogoImg}
        source={require("./assets/segurasoftware-logo.png")}
      />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
  },
  gameTitle: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    position: "absolute",
    top: 60,
  },
  canvas: {
    backgroundColor: "#fff1",
    width: 300,
    height: 300,
    borderRadius: 5,
  },
  boxes: {
    justifyContent: "center",
    alignItems: "center",
  },
  pieces: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 60,
  },
  resetBtn: {
    width: 300,
    backgroundColor: "#fff8",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    marginTop: 20,
  },
  resetBtnText: {
    color: "#1a1a1a",
  },
  winnerMessage: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 40,
  },

  drawText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
  },
  developerLogoImg: {
    resizeMode: "contain",
    width: 100,
    position: "absolute",
    bottom: 0,
    opacity: 1,
    // height: 200,
  },
  playerStatsContainer: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#Fff",
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingBottom: 10,
  },
  playerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  piecePlayerX: {
    color: "red",
    fontSize: 25,
    fontWeight: "bold",
  },
  playerName: {
    color: "#fff4",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  itYourTurnText: {
    backgroundColor: "#fff",
    color: "#000",
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 3,
    textAlign: "center",
    marginTop: 5,
  },
  winnerBoxText: {
    backgroundColor: "green",
    color: "#fff",
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 3,
    textAlign: "center",
    marginTop: 5,
  },
  piecePlayerO: {
    color: "purple",
    fontSize: 25,
    fontWeight: "bold",
  },
  canvasRowOne: {
    flexDirection: "row",
    flex: 1,
    // borderEndColor: "#fff",
    // borderEndWidth: "1px",
  },
  canvasRowTwo: {
    flexDirection: "row",
    flex: 1,
  },
  canvasRowThree: {
    flexDirection: "row",
    flex: 1,
  },
  canvasRowOneColOne: {
    flex: 1,
    borderColor: "#fff5",
    borderBottomWidth: 4,
    borderRightWidth: 4,

    // backgroundColor: "black",
  },
  canvasRowOneColTwo: {
    flex: 1,
    // backgroundColor: "orange",
    borderColor: "#fff5",
    borderBottomWidth: 4,
    borderRightWidth: 4,
  },
  canvasRowOneColThree: {
    flex: 1,
    borderColor: "#fff5",
    borderBottomWidth: 4,
    // backgroundColor: "gray",
  },
  canvasRowTwoColOne: {
    flex: 1,
    borderColor: "#fff5",
    borderBottomWidth: 4,
    borderRightWidth: 4,
    // backgroundColor: "purple",
  },
  canvasRowTwoColTwo: {
    flex: 1,
    borderColor: "#fff5",
    borderBottomWidth: 4,
    borderRightWidth: 4,
    // backgroundColor: "green",
  },
  canvasRowTwoColThree: {
    flex: 1,
    borderColor: "#fff5",
    borderBottomWidth: 4,
    // backgroundColor: "yellow",
  },
  canvasRowThreeColOne: {
    flex: 1,
    borderColor: "#fff5",
    borderRightWidth: 4,
    // backgroundColor: "pink",
  },

  canvasRowThreeColTwo: {
    flex: 1,
    borderColor: "#fff5",
    borderRightWidth: 4,
    // backgroundColor: "blue",
  },
  canvasRowThreeColThree: {
    flex: 1,
    // backgroundColor: "red",
  },
});
