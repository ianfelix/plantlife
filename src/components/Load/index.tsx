import loadingAnimation from '@assets/load';
import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Load = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={loadingAnimation}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  animation: {
    width: 400,
    height: 400,
    backgroundColor: 'transparent',
  },
});
