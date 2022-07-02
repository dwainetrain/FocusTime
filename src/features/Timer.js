import React, {useState} from "react";
import {View, Text, StyleSheet, Vibration} from "react-native";
import {ProgressBar} from "react-native-paper";
import {Countdown} from "../components/Countdown";
import {RoundedButton} from "../components/RoundedButton";
import {colors} from "../utils/colors";
import {fontSize, spacing} from "../utils/sizes";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({focusSubject}) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onEnd={() => Vibration.vibrate(PATTERN)}
          onProgress={setProgress}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "blue",
        }}
      >
        <Text style={styles.title}>Focusing on</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View>
        <ProgressBar
          progress={progress}
          color={colors.white}
          style={{height: spacing.sm}}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title={isStarted ? "Pause" : "Start"}
          onPress={() => setIsStarted(!isStarted)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  title: {
    fontSize: fontSize.md,
    color: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  task: {
    fontSize: fontSize.xxl,
    color: colors.white,
  },
});
