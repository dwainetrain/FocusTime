import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import {colors} from "../utils/colors";
import {spacing} from "../utils/sizes";

export const FocusHistory = ({history}) => {
  if (!history || !history.length) return null;

  const renderItem = ({item}) => <Text style={styles.listItem}>{item}</Text>;

  return (
    <View style={styles.list}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.white,
  },
  list: {
    color: colors.white,
    marginTop: spacing.lg,
  },
  listItem: {
    color: colors.white,
  },
});
