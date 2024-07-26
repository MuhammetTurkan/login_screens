import React, {useState} from 'react';

import {RootStackParamList} from '../../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Colors from '../../Colors';
import LoginLayout from '../layout/LoginLayout';
import EmailField from '../../common/EmailField';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>;

export default function ForgotPasswordScreen({navigation}: Props) {
  const [email, setEmail] = useState<string>('');

  const onSubmit = () => {
    navigation.push('SecureCodeScreen');
  };
  return (
    <LoginLayout headerName="Şifremi Unuttum!">
      <EmailField
        inputHeader="E-Posta"
        onChangeText={value => {
          setEmail(value);
        }}
      />
      <View style={styles.button}>
        <TouchableOpacity style={styles.submit} onPress={onSubmit}>
          <Text style={styles.textSubmit}>Gönder</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <Text style={styles.textBack}>Back</Text>
        </TouchableOpacity>
      </View>
    </LoginLayout>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  submit: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: Colors.borderSubmit,
  },
  textSubmit: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.headerText,
  },
  back: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderBack,
    paddingVertical: 10,
    marginTop: 15,
  },
  textBack: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.backText,
  },
});
