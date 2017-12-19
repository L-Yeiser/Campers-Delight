import React from 'react';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import { object } from 'prop-types';
import { getCampgrounds, createCampground } from '../utils/api';
import DarkButton from './buttons/DarkButton';
import CenterWrapper from './wrappers/CenterWrapper';
import OverlayWrapper from './wrappers/OverlayWrapper';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }


  static navigationOptions = {
    title: 'A Camper Delight',
    headerStyle: { backgroundColor: '#e8e8e8' },
    headerTitleStyle: { color: '#1B1B1D', fontFamily: 'American Typewriter' },
  };

  componentDidMount() {
    return getCampgrounds().then((campgrounds) => {
      this.setState({
        isLoading: false,
        campgrounds,
      });
    });
  }

  addCampground(campground) {
    const { state: { campgrounds } } = this;
    return createCampground(campground)
      .then(({ campground: savedCampground }) => this.setState(
        { campgrounds: [...campgrounds].concat(savedCampground) },
        () => this.viewCampgrounds()
      ));
  }

  viewCampgrounds() {
    const { navigate } = this.props.navigation;
    const addCampground = this.addCampground.bind(this);
    return navigate('Campgrounds', { campgrounds: this.state.campgrounds, addCampground });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={ { flex: 1, paddingTop: 200 } }>
          <ActivityIndicator />
        </View>
      );
    }

    const viewCampgrounds = this.viewCampgrounds.bind(this);

    return (
      <View style={{ flex: 1 }}>
        <Image
          style={styles.image}
          source={require('../assets/images/background.jpg')}
        />
        <OverlayWrapper>
          <CenterWrapper>
            <DarkButton onPress={viewCampgrounds} text="View Campgrounds"/>
          </CenterWrapper>
        </OverlayWrapper>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  image: {
    backgroundColor: '#ccc',
    flex: 1,
    resizeMode: 'stretch',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

HomeScreen.propTypes = {
  navigation: object.isRequired,
};
