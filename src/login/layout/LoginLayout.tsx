import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';

import * as Animatable from 'react-native-animatable';

import Colors from '../../Colors';

interface Props {
  headerName: string;
  children: React.ReactNode;
}

export default function LoginLayout({headerName, children}: Props) {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.darkBackground}
        barStyle="light-content"
      />

      <Animatable.View animation="fadeInUpBig" style={styles.form}>
        <View style={styles.header}>
          <Text style={styles.text_header}>{headerName}</Text>
        </View>

        {children}
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
    justifyContent: 'flex-end',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  form: {
    position: 'relative',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    backgroundColor: Colors.formBackground,
  },

  text_header: {
    color: Colors.headerText,
    fontWeight: 'bold',
    fontSize: 30,
  },
});
