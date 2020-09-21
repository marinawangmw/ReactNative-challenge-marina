import {Card} from '@ui-kitten/components';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {navReference} from '../../apollo/apollo';
import styles from './CardItem.styles';

interface CardWithoutImageProps {
  name: string;
  data?: string;
  imageURL?: string;
  renderMoreDetail: boolean;
}

const CardItem = ({
  name,
  data,
  imageURL,
  renderMoreDetail,
  ...props
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
            renderMoreDetail &&
            navReference().navigate({
              routeName: 'ItemDetails',
              params: {
                name,
                item: props,
              },
            })
          }>
          {imageURL ? renderImageCard() : renderTextCard()}
        </Card>
      </View>
    );
  return null;
};

export default CardItem;
