import { Header } from '@components/Header';
import colors from '@styles/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const PlantSelect = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.blue,
  },
});
