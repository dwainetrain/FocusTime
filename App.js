import * as React from "react";
import {Text, View, StyleSheet, SafeAreaView, StatusBar} from "react-native";
import Constants from "expo-constants";
import {colors} from "./src/utils/colors";
import {Focus} from "./src/features/Focus";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Focus />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: StatusBar.currentHeight + 50,
    backgroundColor: colors.darkBlue,
  },
});
