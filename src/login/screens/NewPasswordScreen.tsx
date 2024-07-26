import React, {useState} from 'react';

import {RootStackParamList} from '../../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Colors from '../../Colors';
import LoginLayout from '../layout/LoginLayout';
import PasswordField from '../../common/PasswordField';

type Props = NativeStackScreenProps<RootStackParamList, 'NewPasswordScreen'>;

export default function NewPasswordScreen({navigation}: Props) {
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');

  const onSubmit = () => {
    Alert.alert(
      'Yeni Şifre Başarılı Şekilde Değiştirildi..',
      'Giriş Ekranına Dönün.',
      [
        {
          text: 'TAMAM',
          onPress: () => navigation.push('LoginScreen'),
        },
      ],
    );
  };

  return (
    <LoginLayout headerName="Yeni Şifre!">
      <PasswordField
        inputHeader="Yeni Şifre"
        placeholderText="Yeni Şifreniz"
        onChangeText={value => {
          setPassword(value);
        }}
      />
      <PasswordField
        inputHeader="Yeni Şifre Tekrar"
        placeholderText="Yeni şifrenizi tekrar giriniz"
        rePassword
        onChangeText={value => {
          setRePassword(value);
        }}
      />

      {rePassword !== password && rePassword.length > 0 && (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Şifreler uyuşmuyor...</Text>
        </Animatable.View>
      )}
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
  errorMsg: {
    color: Colors.errorText,
    fontSize: 14,
  },
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
