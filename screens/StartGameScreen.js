import React, { useState } from "react";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";
import Card from "../components/Card";
import Color from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");

  // handleInput

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start A New Game</Text>
      <Card style={styles.inputContainer}>
        <View style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            maxLength={5}
            blurOnSumit
          />

          <Input
            style={styles.input1}
            keyboardType="number-pad"
            maxLength={5}
            blurOnSumit
          />

          <View style={styles.buttonContainer}>
            <Button title="Reset" color={Color.primary} />
            <Button title="Confirm" color={Color.secondary} />
          </View>
        </View>
      </Card>
      <ScrollView horizontal={true}></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    color: "grey"
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  input1: {
    width: 50,
    textAlign: "center",
    color: "pink"
  }
});
export default StartGameScreen;
