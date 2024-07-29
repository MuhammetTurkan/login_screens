import React, {useState} from 'react';

import {RootStackParamList} from '../../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import OtpInput from '../../common/OtpInput';
import Colors from '../../Colors';
import LoginLayout from '../layout/LoginLayout';
import ButtonComponent from '../components/ButtonsComponent';

import {View, StyleSheet, Alert} from 'react-native';

type Navigation = NativeStackNavigationProp<
  RootStackParamList,
  'SecureCodeScreen'
>;

interface Props {
  navigation: Navigation;
}

export default function ({navigation}: Props) {
  const [value, setValue] = useState<Array<string>>([]);

  const arrayToString = (arr: string[]) => {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  };

  const onSubmit = () => {
    {
      const code = arrayToString(value);
      Alert.alert('Güvenlik Kodu', `${code}`, [
        {
          text: 'TAMAM',
          onPress: () => navigation.push('NewPasswordScreen'),
        },
      ]);
    }
  };

  return (
    <LoginLayout headerName="E-posta adresinize gönderilen 6 haneli güvenlik kodunu giriniz!">
      <View style={styles.action}>
        <OtpInput
          length={6}
          value={value}
          onChange={valuee => {
            setValue(valuee);
          }}
          disabled={false}
        />
      </View>
      <ButtonComponent
        pathName="secure"
        onSubmit={onSubmit}
        onBack={() => navigation.goBack()}
      />
    </LoginLayout>
  );
}

const styles = StyleSheet.create({
  action: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: Colors.actionBorder,
  },
});
