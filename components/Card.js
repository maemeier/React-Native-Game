import React from "react";
import { View, StyleSheet } from "react-native";

const Cards = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    color: "grey",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "white",
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 18,
    padding: 30,
    borderRadius: 20
  }
});
export default Cards;
