import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {notes.map((note) => {
        return (
          <View key={note.id}>
            <Text>{note.title}</Text>
          </View>
        );
      })}

      <View style={styles.container}>
        <FAB
          style={styles.fab}
          small
          icon="plus" // Change the icon as needed
          onPress={() => navigation.navigate("Note")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
});

export default HomeScreen;
