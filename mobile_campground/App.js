import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/components/HomeScreen';
import CampgroundList from './app/components/CampgroundList';
import Campground from './app/components/Campground';
import NewCampground from './app/components/NewCampground';

const AppWrapper = StackNavigator({
  Home: { screen: HomeScreen },
  Campgrounds: { screen: CampgroundList },
  Campground: { screen: Campground },
  NewCampground: { screen: NewCampground },
});

export default class App extends React.Component {
  render() {
    return <AppWrapper />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
