import colors from '@styles/colors';
import fonts from '@styles/fonts';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const Button = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Text style={styles.textButton}>Confirmar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
  },
  textButton: {
    fontWeight: '500',
    fontSize: 17,
    fontFamily: fonts.text,
    color: colors.white,
  },
});
