import colors from '@styles/colors';
import fonts from '@styles/fonts';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.username}>Ian Felix</Text>
      </View>
      <Image
        style={styles.userImage}
        source={{ uri: 'https://avatars.githubusercontent.com/u/62842327?v=4' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
    padding: 32,
  },
  greeting: {
    fontSize: 32,
    fontFamily: fonts.text,
    fontWeight: '300',
    color: colors.heading,
  },

  username: {
    fontSize: 32,
    lineHeight: 36,
    fontFamily: fonts.heading,
    fontWeight: '600',
    color: colors.heading,
  },

  userImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
