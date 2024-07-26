import React, {useState} from 'react';

import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import Colors from '../Colors';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';

interface Props {
  inputHeader: string;
  placeholderText: string;
  rePassword?: boolean;
  onChangeText(value: string): void;
}

export default function PasswordField({
  inputHeader,
  placeholderText,
  rePassword,
  onChangeText,
}: Props) {
  const [password, setPassword] = useState<string>('');
  const [textEntry, setTextEntry] = useState<boolean>(false);

  const updateTextEntry = () => {
    setTextEntry(!textEntry);
  };

  const onChangeTextValue = (value: string) => {
    setPassword(value);
    onChangeText(value);
  };

  return (
    <View>
      <Text style={styles.input_header}>{inputHeader}</Text>
      <View style={styles.action}>
        <Feather name="lock" color={Colors.primaryText} size={20} />
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor={Colors.placeholderText}
          onChangeText={val => onChangeTextValue(val)}
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
      {!rePassword && password.length > 0 && password.length < 8 && (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>
            Şifre 8 karakter uzunluğunda olmalıdır.
          </Text>
        </Animatable.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input_header: {
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
