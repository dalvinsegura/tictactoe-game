import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "./theme";
import MainMenu from "./src/components/MainMenu";
import Game from "./src/components/Game";

export default function App() {
  const [gameMode, setGameMode] = useState(null);

  const handleSelectMode = (mode) => {
    setGameMode(mode);
  };

  const handleBackToMenu = () => {
    setGameMode(null);
  };

  return (
    <View style={styles.container}>
      {gameMode ? (
        <Game mode={gameMode} onBackToMenu={handleBackToMenu} />
      ) : (
        <MainMenu onSelectMode={handleSelectMode} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
