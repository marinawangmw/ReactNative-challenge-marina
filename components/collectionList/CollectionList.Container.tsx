import React, {useState} from 'react';
import {gql, useQuery} from '@apollo/client';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {queries} from '../../apollo/apollo';
import {Data, Filter} from '../../types/types';
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
    const {loading, error, data} = useQuery(GET_COLLECTION, {
      variables: {
        name: inputName,
        type: inputType,
        page: 1,
      },
    });

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
      const collection: Data[] = data[filter].results;
      return <CollectionList navigation={navigation} collection={collection} />;
    }

    return null;
  }

  return null;
};

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 20,
    color: '#3A5268',
  },
});

export default CollectionListContainer;
