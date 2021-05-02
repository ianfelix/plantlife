import colors from '@styles/colors';
import fonts from '@styles/fonts';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  text: string;
};

export const Button = ({ text }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Text style={styles.textButton}>{text}</Text>
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
