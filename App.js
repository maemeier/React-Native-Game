import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  //state

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
