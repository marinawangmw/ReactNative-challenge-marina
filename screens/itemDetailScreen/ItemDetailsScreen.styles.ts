import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    height: 320,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    shadowColor: '#58b1ff',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
  },
  nameContainer: {
    marginBottom: 20,
  },
  nameText: {
    fontSize: 35,
    color: '#3A5268',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    height: '95%',
    width: '80%',
    borderRadius: 50,
  },
  contentTextCard: {
    marginVertical: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: 'white',
  },
  contentImageCard: {
    marginVertical: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: 'white',
  },
  noCharactersText: {
    fontSize: 20,
    color: '#3A5268',
  },
});

export default styles;
