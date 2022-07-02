import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import {TextInput} from "react-native-paper";
import {RoundedButton} from "../components/RoundedButton";
import {spacing} from "../utils/sizes";

export const Focus = ({addSubject}) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          value={text}
          onChangeText={setText}
        />
        <View style={styles.button}>
          <RoundedButton
            title="😆"
            size={50}
            onPress={() => addSubject(text)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    alignSelf: "center",
  },
});
