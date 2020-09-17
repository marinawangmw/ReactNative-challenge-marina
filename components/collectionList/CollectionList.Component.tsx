import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {Filter} from '../../types/types';
import CardItem from '../card/CardItem';

interface CollectionListProps {
  data: any;
  navigation: any;
  filter: Filter;
  fetchMore: any;
}

const CollectionList = ({
  data,
  navigation,
  filter,
  fetchMore,
}: CollectionListProps) => {
  const collection = data[filter].results;
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleLoadMore = () => {
    if (!hasScrolled) {
      return null;
    }

    data[filter].info &&
      data[filter].info.next &&
      fetchMore({
        variables: {
          page: data[filter].info.next,
        },
        updateQuery: (prev: any, {fetchMoreResult}: any) => {
          if (!fetchMoreResult) return prev;
          return {
            [filter]: {
              __typename: fetchMoreResult[filter].__typename,
              info: {...fetchMoreResult[filter].info},
              results: [
                ...prev[filter].results,
                ...fetchMoreResult[filter].results,
              ],
            },
          };
        },
      });
    return null;
  };

  const onScroll = () => {
    setHasScrolled(true);
  };

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
          onScroll={onScroll}
          onEndReached={handleLoadMore}
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