import {Input} from '@ui-kitten/components';
import * as React from 'react';
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
  ...props
}: InputFieldProps) => {
  return (
    <View style={styles.size}>
      <Input
        placeholder={placeholder}
        value={input}
        onChangeText={handleInputChange}
        style={
          props.disabled ? {...styles.size} : {...styles.input, ...styles.size}
        }
        status="basic"
        {...props}
      />
    </View>
  );
};

export default InputField;
