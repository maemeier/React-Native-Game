import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Data from "../screens/data";

const Scrolling = () => {
  return (
    <View style={styles.screen}>
      <Data />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    color: "black"
  }
});

export default Scrolling;
