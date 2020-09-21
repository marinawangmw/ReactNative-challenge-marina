import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {Filter} from '../types/types';
import IntroductionScreen from '../screens/IntroductionScreen';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';
import SearchScreen from '../screens/SearchScreen';

const FilterTabNavigator = createBottomTabNavigator( 
  {
    Characters: {
      screen: SearchScreen,
      params: {
        filter: Filter.characters,
      },
    },
    Locations: {
      screen: SearchScreen,
      params: {
        filter: Filter.locations,
      },
    },
    Episodes: {
      screen: SearchScreen,
      params: {
        filter: Filter.episodes,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#58b1ff',
      labelStyle: {
        fontSize: 18,
      },
    },
  },
);

const RootNavigator = createStackNavigator(
  {
    Introduction: {
      screen: IntroductionScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Searcher: {
      screen: FilterTabNavigator,
      navigationOptions: {
        headerTitle: 'Rick & Morty Searcher',
      },
    },
    ItemDetails: ItemDetailsScreen,
  },
  {
    mode: 'modal',
  },
);

export default createAppContainer(RootNavigator);
