import {client} from './apollo/apollo';
import SearcherNavigator from './navigation/SearcherNavigation';
import {ApolloProvider} from '@apollo/client';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import React from 'react';
import {StatusBar, View} from 'react-native';
import styles from './App.styles';

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

export default App;
