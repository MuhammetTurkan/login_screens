import React, {useState} from 'react';

import {RootStackParamList} from '../../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import * as Animatable from 'react-native-animatable';
import OtpInput from '../../common/OtpInput';
import Colors from '../../Colors';

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';

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

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.darkBackground}
        barStyle={'light-content'}
      />
      <Animatable.View animation={'fadeInUpBig'} style={styles.form}>
        <View style={styles.header}>
          <Text style={styles.text_header}>
            E-posta adresinize gönderilen 6 haneli güvenlik kodunu giriniz!
          </Text>
        </View>
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

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.submit}
            onPress={() => {
              const code = arrayToString(value);
              Alert.alert('Güvenlik Kodu', `${code}`, [
                {
                  text: 'OK',
                  onPress: () => navigation.push('NewPasswordScreen'),
                },
              ]);
            }}>
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

  action: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: Colors.actionBorder,
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
