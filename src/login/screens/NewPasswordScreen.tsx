import React, {useState} from 'react';

import {RootStackParamList} from '../../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Text, StyleSheet, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Colors from '../../Colors';
import LoginLayout from '../layout/LoginLayout';
import PasswordField from '../../common/PasswordField';
import ButtonComponent from '../components/ButtonsComponent';

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
      <ButtonComponent
        pathName="new-password"
        onSubmit={onSubmit}
        onBack={() => navigation.goBack()}
      />
    </LoginLayout>
  );
}

const styles = StyleSheet.create({
  errorMsg: {
    color: Colors.errorText,
    fontSize: 14,
  },
});
