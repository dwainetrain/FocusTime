import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import {TextInput} from "react-native-paper";
import {RoundedButton} from "../components/RoundedButton";

export const Focus = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        label="What would you like to focus on?"
        value={text}
        onChangeText={setText}
      />
      <RoundedButton title="😆" size={50} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    padding: 5,
    height: 50,
    justifyContent: "flex-start",
  },
});
