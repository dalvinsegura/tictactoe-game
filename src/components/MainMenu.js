import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../../theme";

const MainMenu = ({ onSelectMode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic-Tac-Toe</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onSelectMode("local")}
      >
        <Text style={styles.buttonText}>Jugar con amigos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onSelectMode("ai")}
      >
        <Text style={styles.buttonText}>Jugar contra IA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 40,
    color: theme.colors.primary,
    fontWeight: "bold",
    fontFamily: theme.fonts.bold,
    marginBottom: 40,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 3,
  },
  buttonText: {
    color: theme.colors.textDark,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: theme.fonts.bold,
  },
});

export default MainMenu;
