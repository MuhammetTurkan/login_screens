import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from './navigation';
import LoginScreen from './login/screens/LoginScreen';
import ForgotPasswordScreen from './login/screens/ForgotPasswordScreen';
import SecureCodeScreen from './login/screens/SecureCodeScreen';

const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name="SecureCodeScreen" component={SecureCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
