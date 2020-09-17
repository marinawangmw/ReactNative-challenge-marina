import {client} from './apollo/apollo';
import SearcherNavigator from './navigation/SearcherNavigation';
import {ApolloProvider} from '@apollo/client';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <ApolloProvider client={client}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <SearcherNavigator />
        </View>
      </ApolloProvider>
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
