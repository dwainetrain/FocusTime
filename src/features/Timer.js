import React, {useState} from "react";
import {View, Text, StyleSheet, Vibration} from "react-native";
import {ProgressBar} from "react-native-paper";
import {useKeepAwake} from "expo-keep-awake";
import {Countdown} from "../components/Countdown";
import {RoundedButton} from "../components/RoundedButton";
import {colors} from "../utils/colors";
import {fontSize, spacing} from "../utils/sizes";
import {Timing} from "./Timing";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({focusSubject, clearSubject, onTimerEnd}) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onEnd={onEnd}
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
      <View>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={{marginTop: spacing.xxl, alignSelf: "center"}}>
        <RoundedButton size={50} title="clear" onPress={clearSubject} />
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
    zIndex: 0,
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
