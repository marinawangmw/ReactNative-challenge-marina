import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3A5268',
    flex: 1,
  },
  data: {
    fontSize: 20,
    color: '#3A5268',
    flex: 1.5,
  },
});

export default DataRow;
