import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './stack.routes';

export const Routes = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);
