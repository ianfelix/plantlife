import { Button } from '@components/Button';
import colors from '@styles/colors';
import fonts from '@styles/fonts';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export const UserIdentification = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [username, setUsername] = useState('');

  const handleInputFocus = () => {
    setIsFocused(true);
  };
  const handleInputBlur = () => {
    setIsFocused(!!username);
  };
  const handleInputChange = (value: string) => {
    setIsFilled(!!value);
    setUsername(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.content}>
          <View style={styles.form}>
            <Text style={styles.emoji}>{isFilled ? '😄' : '😃'}</Text>

            <Text style={styles.title}>
              Como podemos{`\n`}
              chamar você?
            </Text>

            <TextInput
              style={[styles.input, isFocused && { borderColor: colors.green }]}
              placeholder='Digite um nome'
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onChangeText={handleInputChange}
            />

            <View style={styles.footer}>
              <Button />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
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

  footer: {
    marginTop: 40,
    width: '70%',
  },
});
