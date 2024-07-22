import React, {useState} from 'react';

import {RootStackParamList} from '../../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

import Colors from '../../Colors';

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>;

export default function ForgotPasswordScreen({navigation}: Props) {
  const [email, setEmail] = useState<string>('');
  const [isValidEmail, setValidEmail] = useState<boolean>(false);

  const emailChange = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(val)) {
      setEmail(val);
      setValidEmail(true);
    } else {
      setEmail(val);
      setValidEmail(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.darkBackground}
        barStyle={'light-content'}
      />
      <Animatable.View animation={'fadeInUpBig'} style={styles.form}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Şifremi Unuttum!</Text>
        </View>
        <Text style={styles.text_footer}>E-Posta</Text>
        <View style={styles.action}>
          <Feather name="mail" color={Colors.iconColor} size={20} />
          <TextInput
            placeholder="E-posta adresiniz"
            placeholderTextColor={Colors.placeholderText}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => emailChange(val)}
          />
          {isValidEmail ? (
            <Animatable.View animation={'bounceIn'}>
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {!isValidEmail && email.length != 0 && (
          <Animatable.View animation={'fadeInLeft'} duration={500}>
            <Text style={styles.errorMsg}>
              Lütfen geçerli bir E-posta giriniz.
            </Text>
          </Animatable.View>
        )}
        <View style={styles.button}>
          <TouchableOpacity style={styles.submit}>
            <Text style={styles.textSubmit}>Gönder</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}>
            <Text style={styles.textBack}>Back</Text>
          </TouchableOpacity>
        </View>
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
  text_footer: {
    color: Colors.footerText,
    fontSize: 18,
    marginTop: 35,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: Colors.actionBorder,
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
