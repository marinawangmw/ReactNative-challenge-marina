import * as React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CardItem from '../card/CardItem';

interface CollectionListProps {
  collection: any;
  navigation: any;
}

const CollectionList = ({collection, navigation}: CollectionListProps) => {
  function renderItems(itemData: any) {
    const {name, image, dimension, episode} = itemData.item;
    return (
      <CardItem
        navigation={navigation}
        name={name}
        data={dimension || episode || null}
        imageURL={image || null}
      />
    );
  }
  if (collection) {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={collection}
          renderItem={renderItems}
        />
      </View>
    );
  }
  return null;
};

export default CollectionList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
});
