import {Input} from '@ui-kitten/components';
import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Filter} from '../../types/types';

interface InputFieldProps {
  filter: Filter;
  placeholder: string;
  input: string;
  handleInputChange: (text: string) => void;
}

const InputField = ({
  placeholder,
  input,
  handleInputChange,
}: InputFieldProps) => {
  return (
    <View style={styles.input}>
      <Input
        placeholder={placeholder}
        value={input}
        onChangeText={handleInputChange}
        style={styles.input}
        status="basic"
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    color: '#58b1ff',
    borderColor: '#58b1ff',
    height: 40,
    margin: 6,
  },
});
