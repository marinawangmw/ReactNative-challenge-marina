import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './IntroductionScreen.styles';
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
            source={require('../../asset/logo.png')}
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
          size="giant">
          Enter
        </Button>
        <Text style={styles.bottom_date}>{date}</Text>
      </View>
    </View>
  );
};

export default IntroductionScreen;
