import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { object } from 'prop-types';
import BlueButton from './buttons/BlueButton';
import ScrollList from './wrappers/ScrollList';

export default class CampgroundList extends React.Component {
  static navigationOptions = {
    title: 'Campgrounds',
    headerStyle: { backgroundColor: '#e8e8e8' },
    headerTitleStyle: { color: '#1B1B1D', fontFamily: 'American Typewriter' },
  };

  render() {
    const { navigate, state: { params: { addCampground, campgrounds } } } = this.props.navigation;

    return (
      <View style={{ flex: 1, backgroundColor: '#0A0A0A' }}>
        <ScrollList>
          {campgrounds.map(campground => (
            <BlueButton
              key={campground._id}
              text={campground.name}
              onPress={() => navigate('Campground', { campground })}/>
          ))}
        </ScrollList>
        <TouchableOpacity
          style={styles.newButton}
          onPress={() => navigate('NewCampground', { addCampground })}>
          <Text style={styles.text}>&#43; New</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newButton: {
    height: 50,
    width: '100%',
    backgroundColor: '#0187EE',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

CampgroundList.propTypes = {
  navigation: object.isRequired,
};
