import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import DataRow from '../components/dataRow/DataRow';
import DetailCollectionList from '../components/smallCollectionList/DetailCollectionList';

interface ItemDetailsScreenProps {
  navigation: NavigationScreenProp<any>;
}

const ItemDetailsScreen = (props: ItemDetailsScreenProps) => {
  const {
    type,
    gender,
    image,
    species,
    dimension,
    episode,
    air_date,
    residents,
    characters,
  } = props.navigation.getParam('item');
  const name = props.navigation.getParam('name');
  const smallCollection = residents || characters;

  const renderImageDetails = () => (
    <>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.content}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <DataRow title="Type">{type || 'None'}</DataRow>
        <DataRow title="Gender">{gender}</DataRow>
        <DataRow title="Species">{species}</DataRow>
      </View>
    </>
  );

  const renderTextDetails = () => (
    <>
      <View style={styles.content}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <DataRow title={air_date ? 'Release date' : 'Type'}>
          {air_date || type || 'None'}
        </DataRow>
        <DataRow title={dimension ? 'Dimension' : 'Episode'}>
          {dimension || episode}
        </DataRow>
        <DataRow title={dimension ? 'Residents' : 'Characters'}>
          {!smallCollection[0].id && 'None'}
        </DataRow>
        {smallCollection[0].id && (
          <DetailCollectionList collection={smallCollection.slice(0, 5)} />
        )}
      </View>
    </>
  );
  return (
    <View style={styles.container}>
      {image ? renderImageDetails() : renderTextDetails()}
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
  imageContainer: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#58b1ff',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
  },
  nameContainer: {
    marginBottom: 20,
  },
  nameText: {
    fontSize: 35,
    color: '#3A5268',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    height: '95%',
    width: '80%',
    borderRadius: 50,
  },
  content: {
    marginVertical: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: 'white',
    height: '90%',
  },
  noCharactersText: {
    fontSize: 20,
    color: '#3A5268',
  },
});
