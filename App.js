import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { colors } from "./src/utils/colors"
import { Focus } from "./src/features/Focus"

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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.darkBlue,
  }
});
