import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './src/HomeScreen';
import SharedElements from './src/SharedElements';
import AppearingElements from './src/AppearingElements';
import ImageTransition from './src/ImageTransition';
import LayoutTransition from './src/LayoutTransition';
import Onboarding from './src/Onboarding';
import ShoeShop from './src/ShoeShop';
import FlatList from './src/FlatList';
import AnimatedProperty from './src/AnimatedProperty';

const ExampleNavigator = createStackNavigator({
  home: { screen: HomeScreen, navigationOptions: { title: 'Fluid Transitions' } },
  shared: { screen: SharedElements },
  appear: { screen: AppearingElements },
  image: { screen: ImageTransition },
  layout: { screen: LayoutTransition },
  onboarding: { screen: Onboarding },
  shoes: { screen: ShoeShop },
  flatlist: { screen: FlatList },
  animatedProperty: { screen: AnimatedProperty },
});

export default class App extends React.Component {
  render() {
    return (
      <ExampleNavigator />
    );
  }
}
