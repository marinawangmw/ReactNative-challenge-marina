import SearcherNavigator from './navigation/SearcherNavigation';
import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {ApplicationProvider} from '@ui-kitten/components';

import {client} from './apollo/apollo';
import * as eva from '@eva-design/eva';
import {ApolloProvider} from '@apollo/client';

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
