import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ChooseScreen from '../screens/ChooseScreen';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="myBelajar" component={HomeScreen} />
      <Stack.Screen name="Information" component={ChooseScreen} />
    </Stack.Navigator>
  );
}
