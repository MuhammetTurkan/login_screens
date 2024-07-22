import React, {useRef} from 'react';

import Colors from '../Colors';

import {
  View,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';

interface Props {
  length: number;
  value: Array<string>;
  disabled: boolean;
  onChange(value: Array<string>): void;
}

export default function OtpInput({length, value, disabled, onChange}: Props) {
  const inputRefs = useRef<Array<TextInput>>([]);

  const onChangeValue = (text: string, index: number) => {
    const newValue = value.map((item, valueIndex) => {
      if (valueIndex === index) {
        return text;
      }
      return item;
    });
    onChange(newValue);
  };

  const handleChange = (text: string, index: number) => {
    onChangeValue(text, index);
    if (text.length !== 0) {
      console.log(text);
      return inputRefs?.current[index + 1]?.focus();
    }
    return inputRefs?.current[index - 1]?.focus();
  };

  const handleBackspace = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    const {nativeEvent} = event;

    if (nativeEvent.key === 'Backspace') {
      handleChange('', index);
    }
  };

  return (
    <View style={styles.container}>
      {[...new Array(length)].map((item, index) => (
        <TextInput
          ref={ref => {
            if (ref && !inputRefs.current.includes(ref)) {
              inputRefs.current = [...inputRefs.current, ref];
            }
          }}
          key={index}
          style={styles.input}
          maxLength={1}
          contextMenuHidden
          selectTextOnFocus
          editable={!disabled}
          keyboardType="decimal-pad"
          testID={`OTPInput-${index}`}
          onChangeText={text => handleChange(text, index)}
          onKeyPress={event => handleBackspace(event, index)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    width: 45,
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});
