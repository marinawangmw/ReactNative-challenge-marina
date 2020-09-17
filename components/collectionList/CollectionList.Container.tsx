import {gql, QueryResult, useQuery} from '@apollo/client';
import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

import {queries} from '../../apollo/apollo';
import {Filter} from '../../types/types';
import CollectionList from './CollectionList.Component';

interface CollectionsProps {
  inputName: string;
  inputType: string;
  filter: Filter;
  navigation: any;
}

const CollectionListContainer = ({
  inputName,
  inputType,
  filter,
  navigation,
}: CollectionsProps) => {
  const GET_COLLECTION = gql`
    ${queries[filter]}
  `;

  if (inputName.length > 2 || inputType.length > 2) {
    const {loading, error, data, fetchMore}: QueryResult = useQuery(
      GET_COLLECTION,
      {
        variables: {
          name: inputName,
          type: inputType,
          page: 1,
        },
      },
    );

    if (loading)
      return (
        <View style={styles.messageContainer}>
          <ActivityIndicator size="large" style={{margin: 50}} />
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
          filter={filter}
          navigation={navigation}
          fetchMore={fetchMore}
          data={data}
        />
      );
    }
  }
  return null;
};

const styles = StyleSheet.create({
  messageContainer: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 20,
    color: '#3A5268',
  },
});

export default CollectionListContainer;
