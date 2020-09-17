import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from '@ui-kitten/components';

interface IntroductionScreenProps {
  navigation: any;
}

const IntroductionScreen = (props: IntroductionScreenProps) => {
  const date = new Date().toLocaleDateString();
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.top_content}>
          <Image
            source={require('../asset/logo.png')}
            style={styles.top_image}
          />
          <Text style={styles.title}>REACT NATIVE CHALLENGE</Text>
          <Text style={styles.subtitle}>Marina Wang</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Button
          onPress={() => {
            props.navigation.replace('Searcher');
          }}
          status="basic"
          style={styles.bottom_button}
          size="giant">
          Enter
        </Button>
        <Text style={styles.bottom_date}>{date}</Text>
      </View>
    </View>
  );
};

export default IntroductionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  top: {
    flex: 0.45,
    justifyContent: 'flex-start',
  },
  top_image: {
    height: 100,
    width: 100,
    margin: 20,
  },
  top_content: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3A5268',
  },
  subtitle: {
    fontSize: 18,
    color: '#3A5268',
  },
  bottom: {
    flex: 0.4,
    justifyContent: 'flex-end',
  },
  bottom_button: {},
  bottom_date: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: '#3A5268',
  },
});
