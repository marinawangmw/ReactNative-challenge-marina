import {Card} from '@ui-kitten/components';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface CardWithoutImageProps {
  name: string;
  data?: string;
  imageURL?: string;
  navigation: any;
}

const CardItem = ({
  name,
  data,
  imageURL,
  navigation,
}: CardWithoutImageProps) => {
  const renderImageCard = () => (
    <View style={styles.imageCardContent}>
      <View style={styles.imageCardContentLeft}>
        <Image source={{uri: imageURL}} style={styles.cardImage} />
      </View>
      <View style={styles.imageCardContentRight}>
        <Text style={styles.cardName}>{name}</Text>
      </View>
    </View>
  );

  const renderTextCard = () => (
    <View style={styles.textCardContent}>
      <Text style={styles.cardName}>{name}</Text>
      <Text style={{color: '#3A5268'}}>{data}</Text>
    </View>
  );
  if (name)
    return (
      <View style={styles.cardContainer}>
        <Card
          style={styles.card}
          onPress={() =>
            navigation.navigate({
              routeName: 'ItemDetails',
              params: {item: name},
            })
          }>
          {imageURL ? renderImageCard() : renderTextCard()}
        </Card>
      </View>
    );
  return null;
};

export default CardItem;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    shadowColor: '#58b1ff',
    shadowOpacity: 0.16,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
  },
  card: {
    width: '85%',
    height: 100,
    margin: 10,
    borderRadius: 20,
  },
  textCardContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  imageCardContent: {
    flexDirection: 'row',
    flex: 1,
  },
  imageCardContentLeft: {
    height: 98,
    marginTop: -16,
    flex: 2,
  },
  imageCardContentRight: {
    height: 98,
    marginTop: -16,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  cardName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3A5268',
    textAlign: 'center',
  },
  cardImage: {
    width: '80%',
    height: '100%',
  },
});
