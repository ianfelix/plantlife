import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '@styles/colors';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import fonts from '@styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export const EnvironmentButton = ({
  title,
  active,
  ...rest
}: EnvironmentButtonProps) => (
  <RectButton
    style={[styles.container, active && styles.containerActive]}
    {...rest}>
    <Text style={[styles.title, active && styles.titleActive]}>{title}</Text>
  </RectButton>
);

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 76,
    marginRight: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: colors.shape,
  },

  containerActive: {
    backgroundColor: colors.green_light,
  },

  title: {
    fontSize: 13,
    lineHeight: 23,
    fontWeight: 'normal',
    fontFamily: fonts.text,
    color: colors.heading,
  },

  titleActive: {
    fontFamily: fonts.heading,
    fontWeight: '600',
    color: colors.green_dark,
  },
});
