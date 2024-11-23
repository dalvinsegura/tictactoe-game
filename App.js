import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import MainMenu from "./src/components/MainMenu";
import Game from "./src/components/Game";

import { theme } from "./theme";

export default function App() {
  const [gameMode, setGameMode] = useState(null);

  const handleSelectMode = (mode) => {
    setGameMode(mode);
  };

  return (
    <View style={styles.container}>
      {gameMode ? (
        <Game mode={gameMode} onBackToMenu={() => setGameMode(null)} />
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
