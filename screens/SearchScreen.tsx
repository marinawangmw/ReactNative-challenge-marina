import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../redux/root-reducer';
import {setFilterAction} from '../redux/searcher/searcher.actions';

interface SearchScreenProps {
  navigation: NavigationScreenProp<any>;
  route: any;
}

const SearchScreen = (props: SearchScreenProps) => {
  const dispatch = useDispatch();
  const filter = props.navigation.getParam('filter');
  dispatch(setFilterAction(filter));

  return (
    <View style={styles.container}>
      <Text>{filter}</Text>
      <Button
        title="Details"
        onPress={() => {
          props.navigation.navigate('ItemDetails');
        }}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {},
});
