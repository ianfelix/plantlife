import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/core';
import colors from '@styles/colors';
import fonts from '@styles/fonts';
import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

export const UserIdentification = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [username, setUsername] = useState('');
  const [inputError, setInputError] = useState('');
  const navigation = useNavigation();

  const handleInputFocus = () => {
    setIsFocused(true);
  };
  const handleInputBlur = () => {
    setIsFocused(!!username);
    if (!isFilled) return setInputError('Digite um nome de usuário');
  };
  const handleInputChange = (value: string) => {
    setIsFilled(!!value);
    setUsername(value);
    value && setInputError('');
  };

  const handlePress = () => {
    if (!isFilled) return setInputError('Digite um nome de usuário');
    navigation.navigate('Confirmation');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                style={[
                  styles.input,
                  isFocused && { borderColor: colors.green },
                ]}
                placeholder='Digite um nome'
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChangeText={handleInputChange}
              />
              {!!inputError && (
                <Text style={{ color: colors.red }}>{inputError}</Text>
              )}

              <View style={styles.footer}>
                <Button text='Confirmar' onPress={handlePress} />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
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
    width: '100%',
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
