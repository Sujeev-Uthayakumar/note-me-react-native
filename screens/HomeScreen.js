import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { FAB } from "react-native-paper";
import { useRoute } from "@react-navigation/native";

import NoteCard from "../components/NoteCard";

const HomeScreen = ({ navigation }) => {
  const route = useRoute();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (route.params?.note) {
      setNotes([...notes, route.params.note]);
      console.log("route.params.note", route.params.note);
    }
  }, [route.params?.note]);

  return (
    <SafeAreaView style={styles.container}>
      {notes.length === 0 ? (
        <View style={styles.emptyTextContainer}>
          <Text style={styles.emptyText}>No notes</Text>
        </View>
      ) : (
        <ScrollView>
          {notes.map((note) => {
            return (
              <View style={styles.noteList} key={note.key}>
                <NoteCard
                  title={note.title}
                  description={note.description}
                  note={note.note}
                />
              </View>
            );
          })}
        </ScrollView>
      )}

      <View style={styles.container}>
        <FAB
          style={styles.fab}
          color="white"
          icon="plus" // Change the icon as needed
          onPress={() => navigation.navigate("New Note")}
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
    backgroundColor: "black",
  },
  noteList: {
    marginHorizontal: 24,
  },
  emptyText: {},
  emptyTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
});

export default HomeScreen;
