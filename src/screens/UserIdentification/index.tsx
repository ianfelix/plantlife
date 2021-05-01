import colors from '@styles/colors';
import fonts from '@styles/fonts';
import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, TextInput } from 'react-native';

export const UserIdentification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.emoji}>🤭</Text>
          <Text style={styles.title}>
            Como podemos{`\n`}
            chamar você?
          </Text>
          <TextInput style={styles.input} placeholder='Digite um nome' />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    flex: 1,
    width: '100%',
  },

  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emoji: {
    fontSize: 44,
  },

  title: {
    marginTop: 24,
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    fontWeight: 'bold',
  },

  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },
});
