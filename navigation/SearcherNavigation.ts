import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import IntroductionScreen from '../screens/IntroductionScreen';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';
import SearchScreen from '../screens/SearchScreen';

const SearcherNavigator = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
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

const FilterTabNavigator = createBottomTabNavigator({
  Characters: {
    screen: SearcherNavigator,

    params: {filter: 'characters'},
  },
  Locations: {
    screen: SearcherNavigator,
    params: {filter: 'locations'},
  },
  Episodes: {
    screen: SearcherNavigator,
    params: {filter: 'episodes'},
  },
});

const RootNavigator = createStackNavigator(
  {
    Introduction: {screen: IntroductionScreen, params: {filter: 'episodes'}},
    Searcher: {screen: FilterTabNavigator},
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(RootNavigator);
