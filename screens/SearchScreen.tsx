import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

import CollectionListContainer from '../components/collectionList/CollectionList.Container';
import InputField from '../components/inputField/InputField';
import {Filter} from '../types/types';
import {cache, isScrolling, isTyping} from '../apollo/apollo';

interface SearchScreenProps {
  navigation: NavigationScreenProp<any>;
}

const SearchScreen = ({navigation}: SearchScreenProps) => {
  const filter: Filter = navigation.getParam('filter');
  const [inputName, setInputName] = useState('');
  const [inputType, setInputType] = useState('');

  const handleInputName = (name: string) => {
    setInputName(name);
    isScrolling(false);
    isTyping(true);
    cache.evict({});
  };

  const handleInputType = (type: string) => {
    setInputType(type);
    isScrolling(false);
    isTyping(true);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <InputField
          filter={filter}
          placeholder="Search by name"
          input={inputName}
          handleInputChange={handleInputName}
        />
        <InputField
          filter={filter}
          placeholder="Search by type"
          input={inputType}
          handleInputChange={handleInputType}
          disabled={filter === Filter.episodes && true}
        />
      </View>
      <View style={styles.collectionContainer}>
        <CollectionListContainer
          inputName={inputName || ''}
          inputType={inputType || ''}
          filter={filter}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputContainer: {
    paddingTop: 15,
    paddingHorizontal: 20,
    flex: 1,
    width: '100%',
  },
  collectionContainer: {
    flex: 4.5,
    width: '100%',
  },
});
