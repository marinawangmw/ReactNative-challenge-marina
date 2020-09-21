import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './ItemDetailsScreen.styles';
import {NavigationScreenProp} from 'react-navigation';
import DataRow from '../../components/dataRow/DataRow';
import DetailCollectionList from '../../components/detailCollectionList/DetailCollectionList';

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
      <View style={styles.contentImageCard}>
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
      <View
        style={
          smallCollection && !smallCollection[0].id
            ? {...styles.contentTextCard}
            : {...styles.contentTextCard, height: '90%'}
        }>
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
          {smallCollection && !smallCollection[0].id && 'None'}
        </DataRow>
        {smallCollection && smallCollection[0].id && (
          <DetailCollectionList collection={smallCollection.slice(0, 5)} />
        )}
      </View>
    </>
  );
  return <>{image ? renderImageDetails() : renderTextDetails()}</>;
};

ItemDetailsScreen.navigationOptions = () => {
  return {
    headerTitle: 'Details',
  };
};

export default ItemDetailsScreen;
