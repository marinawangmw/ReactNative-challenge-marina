import {StyleSheet} from 'react-native';

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
    borderRadius: 18,
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
    marginLeft: -25,
  },
  imageCardContentRight: {
    height: 98,
    marginTop: -16,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A5268',
    textAlign: 'center',
  },
  cardImage: {
    width: '80%',
    height: '100%',
  },
});

export default styles;
