import React, {useState} from 'react';

import {RootStackParamList} from '../../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

import Colors from '../../Colors';
import LoginLayout from '../layout/LoginLayout';

type Props = NativeStackScreenProps<RootStackParamList, 'NewPasswordScreen'>;

export default function NewPasswordScreen({navigation}: Props) {
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');

  const [textEntry, setTextEntry] = useState<boolean>(false);
  const [reTextEntry, setReTextEntry] = useState<boolean>(false);

  const updateTextEntry = () => {
    setTextEntry(!textEntry);
  };
  const updateReTextEntry = () => {
    setReTextEntry(!reTextEntry);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };
  const handleRePasswordChange = (value: string) => {
    setRePassword(value);
  };

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
      <Text style={styles.text_footer}>Şifre</Text>
      <View style={styles.action}>
        <Feather name="lock" color={Colors.primaryText} size={20} />
        <TextInput
          placeholder="Yeni Şifreniz"
          placeholderTextColor={Colors.placeholderText}
          onChangeText={val => handlePasswordChange(val)}
          secureTextEntry={!textEntry}
          style={styles.textInput}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={updateTextEntry}>
          {textEntry ? (
            <Feather name="eye" color="grey" size={20} />
          ) : (
            <Feather name="eye-off" color="grey" size={20} />
          )}
        </TouchableOpacity>
      </View>
      {password.length > 0 && password.length < 8 && (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>
            Şifre 8 karakter uzunluğunda olmalıdır.
          </Text>
        </Animatable.View>
      )}
      <Text style={styles.text_footer}>Şifre Tekrar</Text>
      <View style={styles.action}>
        <Feather name="lock" color={Colors.primaryText} size={20} />
        <TextInput
          placeholder="Yeni Şifrenizi tekrar yazın"
          placeholderTextColor={Colors.placeholderText}
          onChangeText={value => handleRePasswordChange(value)}
          secureTextEntry={!reTextEntry}
          style={styles.textInput}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={updateReTextEntry}>
          {reTextEntry ? (
            <Feather name="eye" color="grey" size={20} />
          ) : (
            <Feather name="eye-off" color="grey" size={20} />
          )}
        </TouchableOpacity>
      </View>
      {rePassword !== password && rePassword.length > 0 && (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Şifreler uyuşmuyor...</Text>
        </Animatable.View>
      )}
      <View style={styles.button}>
        <TouchableOpacity style={styles.submit} onPress={onSubmit}>
          <Text style={styles.textSubmit}>Giriş Yap</Text>
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
  text_footer: {
    color: Colors.footerText,
    fontSize: 18,
    marginTop: 35,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: Colors.actionBorder,
    paddingBottom: 5,
  },

  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: Colors.inputColor,
  },
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
