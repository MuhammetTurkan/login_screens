import React from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Colors from '../../Colors';

interface Props {
  pathName: string;
  onSubmit(): void;
  onBack?(): void;
}

export default function ButtonComponent({pathName, onSubmit, onBack}: Props) {
  return (
    <View style={styles.button}>
      {pathName === 'login' ? (
        <TouchableOpacity
          style={[styles.buttonComponent, styles.submit]}
          onPress={onSubmit}>
          <Text style={[styles.buttonText, styles.textSubmit]}>Giriş Yap</Text>
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity
            style={[styles.buttonComponent, styles.submit]}
            onPress={onSubmit}>
            <Text style={[styles.buttonText, styles.textSubmit]}>Gönder</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonComponent, styles.back]}
            onPress={onBack}>
            <Text style={[styles.buttonText, styles.textBack]}>Back</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginTop: 50,
  },

  buttonComponent: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderWidth: 1,
    borderRadius: 15,
  },

  submit: {
    borderColor: Colors.borderSubmit,
  },
  back: {
    borderColor: Colors.borderBack,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSubmit: {
    color: Colors.headerText,
  },

  textBack: {
    color: Colors.backText,
  },
});
