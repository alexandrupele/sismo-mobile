import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ProofScreen from '../screens/ProofScreen';

const RootStack = createNativeStackNavigator();

const linking = {
  prefixes: ['sismo://'],
  config: {
    initialRouteName: 'Home' as const,
    screens: {
      Home: {
        path: 'home',
      },
      Proof: {
        path: 'proof/:proofData',
      },
    },
  },
};

const RootNavigator = () => {
  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator color="blue" size="large" />}>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Proof" component={ProofScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
