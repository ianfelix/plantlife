import {
  Jost_400Regular,
  Jost_600SemiBold,
  useFonts,
} from '@expo-google-fonts/jost';
import { Confirmation } from '@screens/Confirmation';
import { UserIdentification } from '@screens/UserIdentification';
import { Welcome } from '@screens/Welcome';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { View } from 'react-native';

const App = () => {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <View style={{ flex: 1 }}>
      {/* <Welcome /> */}
      {/* <UserIdentification /> */}
      <Confirmation />
    </View>
  );
};

export default App;
