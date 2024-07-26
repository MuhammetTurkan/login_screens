import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import Colors from '../Colors';

import {View, Text, TextInput, StyleSheet, Platform} from 'react-native';

interface Props {
  inputHeader: string;
  onChangeText(value: string): void;
}

export default function EmailField({inputHeader, onChangeText}: Props) {
  const [checkTestInput, setTextInput] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const onChangeTextValue = (value: string) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(value)) {
      setTextInput(true);
      setEmail(value);
      onChangeText(value);
    } else {
      setTextInput(false);
      setEmail(value);
      onChangeText(value);
    }
  };
  return (
    <View>
      <Text style={styles.input_header}>{inputHeader}</Text>
      <View style={styles.action}>
        <Feather name="mail" color={Colors.iconColor} size={20} />
        <TextInput
          placeholder="E-posta adresiniz."
          placeholderTextColor={Colors.placeholderText}
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={val => onChangeTextValue(val)}
        />
        {checkTestInput ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
        ) : null}
      </View>
      {!checkTestInput && email.length > 0 && (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>
            Lütfen geçerli bir e-posta giriniz.
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
});
