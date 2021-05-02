import { Button } from '@components/Button';
import colors from '@styles/colors';
import fonts from '@styles/fonts';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Confirmation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>😄</Text>
      <View style={styles.contentText}>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.paragraph}>
          Agora vamos começar a cuidar das suas{'\n'}
          plantinhas com muito cuidado.
        </Text>
      </View>

      <View style={styles.footer}>
        <Button text='Começar' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentText: {
    marginTop: 64,
    paddingHorizontal: 32,
  },

  emoji: {
    fontSize: 96,
  },

  title: {
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
  },

  paragraph: {
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: fonts.text,
    color: colors.body_light,
    fontSize: 17,
    lineHeight: 25,
  },

  footer: {
    width: '60%',
  },
});
