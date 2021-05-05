import colors from '@styles/colors';
import fonts from '@styles/fonts';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

interface PlantCardProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

export const PlantCardPrimary = ({ data, ...rest }: PlantCardProps) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={80} />

      <Text style={styles.title}>{data.name}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    borderRadius: 20,
    backgroundColor: colors.shape,
    alignItems: 'center',
    paddingVertical: 10,
    margin: 10,
  },
  title: {
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 13,
    fontWeight: '600',
  },
});
