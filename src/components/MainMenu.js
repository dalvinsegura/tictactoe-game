import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

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
    backgroundColor: "#1a1a1a",
  },
  title: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#fff8",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "#1a1a1a",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MainMenu;
