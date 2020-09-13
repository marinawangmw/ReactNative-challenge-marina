import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import {useSelector} from 'react-redux';

import {RootState} from '../redux/root-reducer';

interface ItemDetailsScreenProps {
  navigation: NavigationScreenProp<any>;
}

const ItemDetailsScreen = (props: ItemDetailsScreenProps) => {
  const filter = useSelector((state: RootState) => state.searcher.activeFilter);
  return (
    <View style={styles.container}>
      <Text>{`${filter} Details`}</Text>
      <Button
        title="Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
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
