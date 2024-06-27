import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../Colors';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screens App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryBackground,
  },

  text: {
    fontSize: 20,
    color: Colors.primaryText,
  },
});
