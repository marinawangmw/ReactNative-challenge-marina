import {Input} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';
import styles from './InputField.styles';

interface InputFieldProps {
  placeholder: string;
  input: string;
  handleInputChange: (text: string) => void;
  disabled?: boolean;
}

const InputField = ({
  placeholder,
  input,
  handleInputChange,
  disabled,
}: InputFieldProps) => {
  return (
    <View style={styles.size}>
      <Input
        placeholder={placeholder}
        value={input}
        onChangeText={handleInputChange}
        style={disabled ? styles.size : [styles.input, styles.size]}
        status="basic"
        disabled={disabled}
      />
    </View>
  );
};

export default InputField;
