import {
  Jost_400Regular,
  Jost_600SemiBold,
  useFonts,
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { View } from 'react-native';
import { Routes } from '@routes/index';

const App = () => {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <View style={{ flex: 1 }}>
      <Routes />
    </View>
  );
};

export default App;
