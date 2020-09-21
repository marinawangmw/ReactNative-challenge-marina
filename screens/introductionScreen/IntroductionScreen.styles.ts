import {StyleSheet} from 'react-native';

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
    height: 150,
    width: 150,
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
  bottom_date: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: '#3A5268',
  },
});

export default styles;
