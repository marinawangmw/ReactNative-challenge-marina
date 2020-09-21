import React, {useState} from 'react';
import {View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import styles from './SearchScreen.styles';

import CollectionListContainer from '../../components/collectionList/CollectionList.Container';
import InputField from '../../components/inputField/InputField';
import {Filter} from '../../types/types';
import {isScrolling, isTyping, navReference, filter} from '../../apollo/apollo';
import {Button} from '@ui-kitten/components';

interface SearchScreenProps {
  navigation: NavigationScreenProp<any>;
}

const SearchScreen = ({navigation}: SearchScreenProps) => {
  const selectedFilter: Filter = navigation.getParam('filter');
  const [inputName, setInputName] = useState('');
  const [inputType, setInputType] = useState('');
  navReference(navigation);
  filter(selectedFilter);

  const handleInputName = (name: string) => {
    setInputName(name);
    isScrolling(false);
    isTyping(true);
  };

  const handleInputType = (type: string) => {
    setInputType(type);
    isScrolling(false);
    isTyping(true);
  };

  const handleResetInput = () => {
    setInputName('');
    setInputType('');
    isScrolling(false);
    //setting typing in true will clean the cache
    isTyping(true);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="Search by name"
          input={inputName}
          handleInputChange={handleInputName}
        />
        <InputField
          placeholder="Search by type"
          input={inputType}
          handleInputChange={handleInputType}
          disabled={filter() === Filter.episodes && true}
        />
        <Button
          onPress={handleResetInput}
          appearance="ghost"
          status="info"
          style={styles.button}>
          CLEAR ALL
        </Button>
      </View>
      <View style={styles.collectionContainer}>
        <CollectionListContainer
          inputName={inputName || ''}
          inputType={inputType || ''}
        />
      </View>
    </View>
  );
};

export default SearchScreen;
