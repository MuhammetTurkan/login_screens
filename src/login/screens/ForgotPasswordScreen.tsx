import React, {useState} from 'react';

import {RootStackParamList} from '../../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Colors from '../../Colors';
import LoginLayout from '../layout/LoginLayout';
import EmailField from '../../common/EmailField';
import ButtonComponent from '../components/ButtonsComponent';

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
      <ButtonComponent
        pathName="forgot-password"
        onSubmit={onSubmit}
        onBack={() => navigation.goBack()}
      />
    </LoginLayout>
  );
}
