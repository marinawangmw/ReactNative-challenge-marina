import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

interface SearchScreenProps {
  navigation: NavigationScreenProp<any>;
}

const SearchScreen = (props: SearchScreenProps) => {
  return (
    <View style={styles.container}>
      <Button
        title="Details"
        onPress={() => {
          props.navigation.navigate({
            routeName: 'ItemDetails',
          });
        }}></Button>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {},
});
