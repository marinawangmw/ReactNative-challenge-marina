import {gql, useQuery} from '@apollo/client';
import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import styles from './CollectionList.styles';

import {queries, filter} from '../../apollo/apollo';
import CollectionList from './CollectionList.Component';

interface CollectionsProps {
  inputName: string;
  inputType: string;
}

const CollectionListContainer = ({inputName, inputType}: CollectionsProps) => {
  const selectedFilter = filter();

  const GET_COLLECTION = gql`
    ${queries[selectedFilter]}
  `;
  if (inputName.length > 2 || inputType.length > 2) {
    const {loading, error, data, fetchMore} = useQuery(GET_COLLECTION, {
      variables: {
        name: inputName,
        type: inputType,
        page: 1,
      },
    });

    if (loading)
      return (
        <View style={styles.messageContainer}>
          <ActivityIndicator size="large" style={styles.loadingMessage} />
        </View>
      );

    if (error)
      return (
        <View style={styles.messageContainer}>
          <Text style={styles.errorText}>No data found</Text>
        </View>
      );

    if (data) {
      return (
        <CollectionList
          fetchMore={fetchMore}
          data={data}
          inputName={inputName}
          inputType={inputType}
        />
      );
    }
  }
  return null;
};

export default CollectionListContainer;
