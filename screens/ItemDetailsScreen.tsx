import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

interface ItemDetailsScreenProps {
  navigation: NavigationScreenProp<any>;
}

const ItemDetailsScreen = (props: ItemDetailsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Item Details Screen</Text>
    </View>
  );
};

ItemDetailsScreen.navigationOptions = () => {
  return {
    headerTitle: 'Details',
  };
};

export default ItemDetailsScreen;

const styles = StyleSheet.create({
  container: {},
});
