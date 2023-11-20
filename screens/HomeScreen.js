import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { useRoute } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const route = useRoute();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (route.params?.note) {
      setNotes([...notes, route.params.note]);
      console.log("route.params.note", route.params.note);
    }
  }, [route.params?.note]);
  console.log(notes);
  return (
    <SafeAreaView style={styles.container}>
      {notes.map((note) => {
        return (
          <View key={note.key}>
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
