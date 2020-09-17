import {Input} from '@ui-kitten/components';
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Filter} from '../../types/types';

interface InputFieldProps {
  filter: Filter;
  placeholder: string;
  input: string;
  handleInputChange: (text: string) => void;
  disabled?: boolean;
  status: string;
}

const InputField = ({
  placeholder,
  input,
  handleInputChange,
  ...props
}: InputFieldProps) => {
  return (
    <View style={styles.input}>
      <Input
        placeholder={placeholder}
        value={input}
        onChangeText={handleInputChange}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    borderColor: '#58b1ff',
    height: 40,
    margin: 6,
  },
});
