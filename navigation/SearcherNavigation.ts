import {Filter} from '../redux/searcher/searcher.types';
import IntroductionScreen from '../screens/IntroductionScreen';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import React from 'react';
import {TabBarIOS} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const FilterTabNavigator = createBottomTabNavigator({
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
});

const RootNavigator = createStackNavigator(
  {
    Introduction: IntroductionScreen,
    Searcher: FilterTabNavigator,
    ItemDetails: ItemDetailsScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(RootNavigator);
