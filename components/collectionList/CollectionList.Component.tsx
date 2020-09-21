import React from 'react';
import {FlatList} from 'react-native';
import {filter} from '../../apollo/apollo';
import CardItem from '../cardItem/CardItem';
import {isScrolling, isTyping} from '../../apollo/apollo';

interface CollectionListProps {
  data: any;
  fetchMore: any;
  inputName: string;
  inputType: string;
}

const CollectionList = ({
  data,
  fetchMore,
  inputName,
  inputType,
}: CollectionListProps) => {
  const selectedFilter = filter();

  const handleLoadMore = () => {
    if (!isScrolling()) {
      return null;
    }

    if (data[selectedFilter].info) {
      if (data[selectedFilter].info.next) {
        fetchMore({
          variables: {
            page: data[selectedFilter].info.next,
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
        name={name}
        data={dimension || episode || null}
        imageURL={image || null}
        renderMoreDetail={true}
        {...itemData.item}
      />
    );
  }
  if (data) {
    return (
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={data[selectedFilter].results}
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
