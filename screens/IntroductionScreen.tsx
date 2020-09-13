import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

interface IntroductionScreenProps {
  navigation: any;
}

const IntroductionScreen = (props: IntroductionScreenProps) => {
  const date = new Date().toLocaleDateString();
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.top__text}>
          <Text style={styles.title}>REACT NATIVE CHALLENGE</Text>
          <Text>Marina Wang</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Button
          title="Enter"
          onPress={() => {
            props.navigation.replace('Searcher');
          }}
        />
        <Text>{date}</Text>
      </View>
    </View>
  );
};

export default IntroductionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  top: {
    flex: 0.3,
    justifyContent: 'flex-start',
  },
  top__text: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottom: {
    flex: 0.6,
    justifyContent: 'flex-end',
  },
});
