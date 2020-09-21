import * as React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Characters} from '../../types/types';
import CardItem from '../card/CardItem';

interface DetailCollectionListProps {
  collection: Characters[];
}

const DetailCollectionList = ({collection}: DetailCollectionListProps) => {
  const renderCollection = (itemData: any) => (
    <CardItem imageURL={itemData.item.image} name={itemData.item.name} />
  );

  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={collection}
      renderItem={renderCollection}
    />
  );
};

export default DetailCollectionList;
