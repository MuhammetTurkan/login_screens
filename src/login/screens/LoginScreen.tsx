import React, {useState} from 'react';
import {RootStackParamList} from '../../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

import Colors from '../../Colors';

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

  const textInputChange = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(val)) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };
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
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.darkBackground}
        barStyle="light-content"
      />

      <Animatable.View animation="fadeInUpBig" style={styles.form}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Giriş Yap!</Text>
        </View>
        <Text style={styles.text_footer}>E-Posta</Text>
        <View style={styles.action}>
          <Feather name="mail" color={Colors.iconColor} size={20} />
          <TextInput
            placeholder="E-posta adresiniz."
            placeholderTextColor={Colors.placeholderText}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
            onEndEditing={e => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Lütfen geçerli bir e-posta giriniz.
            </Text>
          </Animatable.View>
        )}
        <Text style={styles.text_footer}>Şifre</Text>
        <View style={styles.action}>
          <Feather name="lock" color={Colors.primaryText} size={20} />
          <TextInput
            placeholder="Şifreniz"
            placeholderTextColor={Colors.placeholderText}
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPas ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}
        <TouchableOpacity
          onPress={() => navigation.push('ForgotPasswordScreen')}>
          <Text style={styles.forgotPasswordText}>Şifremi Unuttum</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity style={styles.submit}>
            <Text style={styles.textSubmit}>Giriş Yap</Text>
          </TouchableOpacity>

          {/*   <TouchableOpacity style={styles.signUp}>
            <Text style={styles.signUpText}>Üye Ol</Text>
          </TouchableOpacity> */}
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
    borderBottomWidth: 1,
    borderColor: Colors.actionBorder,
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.actionErrorBorder,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: Colors.inputColor,
  },
  errorMsg: {
    color: '#FF0000',
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
  signUp: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.borderSignUp,
    paddingVertical: 10,
    borderWidth: 1,
    marginTop: 15,
  },
  textSubmit: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.headerText,
  },
  signUpText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.signUpText,
  },
  forgotPasswordText: {
    fontSize: 15,
    color: Colors.primaryText,
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});
