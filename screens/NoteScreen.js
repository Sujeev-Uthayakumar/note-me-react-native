import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";

import InputField from "../components/InputField";

const NoteScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    // Submit the form
    const hasErrors = checkIfFieldsAreEmpty();

    if (!hasErrors) {
      const savedNote = {
        title,
        description,
        note,
        key: Math.random().toString(),
      };
      navigation.navigate("Home", { note: savedNote });
    }
  };

  const checkIfFieldsAreEmpty = () => {
    let errors = false;
    if (!title || !description || !note) {
      errors = true;
    }
    if (errors) {
      Alert.alert("Cannot Save the Note", "Some of the inputs are blank.", [
        { text: "Okay" },
      ]);
    }

    return errors;
  };

  return (
    <SafeAreaView style={styles.container}>
      <InputField
        placeholder="Title"
        value={title}
        label="Title"
        onChangeText={setTitle}
      />
      <InputField
        placeholder="Description"
        value={description}
        label="Description"
        onChangeText={setDescription}
      />
      <View style={styles.textContainer}>
        <Text>Notes</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.largeInput}
            onChangeText={setNote}
            value={note}
            multiline
            numberOfLines={4} // Adjust the number of lines as needed
            placeholder="Enter your text here"
            placeholderTextColor="#666666"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save note</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textContainer: {
    marginTop: 24,
    marginHorizontal: 20,
  },
  largeInput: {
    flex: 1,
    paddingVertical: 15,
  },
  inputView: {
    marginBottom: 10,
    backgroundColor: "#eceeec",
    borderRadius: 15,
    paddingHorizontal: 24,
    height: "60%",
    padding: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "black",
    marginHorizontal: 24,
    paddingVertical: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default NoteScreen;
