import React, { useState } from "react";
import { View } from "react-native";
import MainMenu from "./src/components/MainMenu";
import Game from "./src/components/Game";

export default function App() {
  const [gameMode, setGameMode] = useState(null);

  const handleSelectMode = (mode) => {
    setGameMode(mode);
  };

  return (
    <View style={{ flex: 1 }}>
      {gameMode ? (
        <Game mode={gameMode} onBackToMenu={() => setGameMode(null)} />
      ) : (
        <MainMenu onSelectMode={handleSelectMode} />
      )}
    </View>
  );
}
