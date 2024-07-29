import React, {useState} from 'react';
import {RootStackParamList} from '../../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LoginLayout from '../layout/LoginLayout';
import EmailField from '../../common/EmailField';
import Colors from '../../Colors';
import PasswordField from '../../common/PasswordField';
import ButtonComponent from '../components/ButtonsComponent';

type Props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export default function LoginScreen({navigation}: Props) {
  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPas: true,
  });

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPas: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPas: false,
      });
    }
  };

  return (
    <LoginLayout headerName="Giriş Yap!">
      <EmailField
        inputHeader="E-Posta"
        onChangeText={value => {
          data.email = value;
        }}
      />
      <PasswordField
        inputHeader="Şifre"
        placeholderText="Şifreniz"
        onChangeText={value => {
          data.password = value;
        }}
      />

      <TouchableOpacity onPress={() => navigation.push('ForgotPasswordScreen')}>
        <Text style={styles.forgotPasswordText}>Şifremi Unuttum</Text>
      </TouchableOpacity>
      <ButtonComponent
        pathName="login"
        onSubmit={() => console.log('Giriş Yapıldı!')}
      />
    </LoginLayout>
  );
}

const styles = StyleSheet.create({
  forgotPasswordText: {
    fontSize: 15,
    color: Colors.primaryText,
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});
