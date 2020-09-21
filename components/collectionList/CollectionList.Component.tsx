import React from 'react';
import {FlatList} from 'react-native';

import {Filter} from '../../types/types';
import CardItem from '../card/CardItem';
import {isScrolling, isTyping, isFetchingMore} from '../../apollo/apollo';

interface CollectionListProps {
  navigation: any;
  filter: Filter;
  data: any;
  fetchMore: any;
  inputName: string;
  inputType: string;
}

const CollectionList = ({
  data,
  navigation,
  filter,
  fetchMore,
  inputName,
  inputType,
}: CollectionListProps) => {
  const collection = data[filter].results;

  const handleLoadMore = () => {
    if (!isScrolling()) {
      return null;
    }

    if (data[filter].info) {
      if (data[filter].info.next) {
        isFetchingMore(true);
        fetchMore({
          variables: {
            page: data[filter].info.next,
            name: inputName,
            type: inputType,
          },
        }).catch((error: any) => console.log('Error fetchmore', error.message));
      }
    }
    return null;
  };

  const onScroll = () => {
    isScrolling(true);
    isTyping(false);
  };

  function renderItems(itemData: any) {
    const {name, image, dimension, episode} = itemData.item;
    return (
      <CardItem
        navigation={navigation}
        name={name}
        data={dimension || episode || null}
        imageURL={image || null}
        {...itemData.item}
      />
    );
  }
  if (collection) {
    return (
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={collection}
        renderItem={renderItems}
        onScroll={onScroll}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
      />
    );
  }
  return null;
};

export default CollectionList;
