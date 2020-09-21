import React from 'react';
import {Text, View} from 'react-native';
import styles from './DataRow.styles';

interface DataRowProps {
  title: string;
  children?: React.ReactNode;
}

const DataRow = ({title, children}: DataRowProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}: </Text>
    <Text style={styles.data}>{children}</Text>
  </View>
);

export default DataRow;
