import { TextInput, View, StyleSheet, Text } from "react-native";

const InputField = ({ placeholder, label, value, onChangeText }) => {
  const styles = StyleSheet.create({
    inputContainer: {
      marginTop: 24,
      marginHorizontal: 20,
    },
    inputView: {
      flexDirection: "row",
      paddingBottom: 0,
      borderRadius: 15,
      paddingHorizontal: 24,
      alignItems: "center",
      backgroundColor: "#eceeec",
    },
    textInput: {
      flex: 1,
      paddingVertical: 15,
    },
    errorContainer: {
      paddingHorizontal: 24,
    },
  });

  return (
    <View style={styles.inputContainer}>
      <View>
        <Text>{label}</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor="#666"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default InputField;
