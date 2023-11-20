import React from "react";
import { View, StyleSheet, Text } from "react-native";

const NoteCard = ({ title, description, note }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
      <Text style={styles.noteText}>{note}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 24,
    backgroundColor: "#FFD792",
    padding: 20,
    borderRadius: 15,
  },
  titleText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
    marginBottom: 5,
  },
  descriptionText: {
    color: "black",
  },
  noteText: {
    color: "black",
  },
});

export default NoteCard;
