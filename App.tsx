import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import SearcherNavigator from './navigation/SearcherNavigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <SearcherNavigator />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
