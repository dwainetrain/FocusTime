import React, {useState} from "react";
import {Text, View, StyleSheet, SafeAreaView, StatusBar} from "react-native";
import Constants from "expo-constants";
import {colors} from "./src/utils/colors";
import {Focus} from "./src/features/Focus";
import {spacing} from "./src/utils/sizes";
import {Timer} from "./src/features/Timer";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubject={() => {}}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.sm,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.darkBlue,
    justifyContent: "center",
  },
  timerText: {
    color: "#ffffff",
    alignSelf: "center",
  },
});
