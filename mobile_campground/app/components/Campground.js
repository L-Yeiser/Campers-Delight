import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { object } from 'prop-types';
import InnerWrapper from './wrappers/InnerWrapper';
import BackgroundLight from './wrappers/BackgroundLight';
import Section from './wrappers/Section';
import Inset from './wrappers/Inset';
import Header from './textComponents/Header';
import SubHeader from './textComponents/SubHeader';

export default class Campground extends React.Component {
  static navigationOptions = {
    title: 'Campground',
    headerStyle: { backgroundColor: '#e8e8e8' },
    headerTitleStyle: { color: '#1B1B1D', fontFamily: 'American Typewriter' },
  };

  render() {
    const { state: { params: { campground } } } = this.props.navigation;

    return (
      <BackgroundLight>
        <InnerWrapper>
          <Header header={campground.name} />
          <SubHeader subheader={campground.description}/>
          <Section>
            <Text style={styles.infoText}>Bathroom: { campground.hasBathroom ? 'yes' : 'no' }</Text>
            <Text style={styles.infoText}>Shower: { campground.hasShower ? 'yes' : 'no' }</Text>
          </Section>
          <Section>
            {campground.ratings.map(({ value, description }) => (
              <Inset key={description}>
                <Text style={styles.textRight}>{value}</Text>
                <Text style={styles.valueText}>{description}</Text>
              </Inset>
            ))}
          </Section>
        </InnerWrapper>
      </BackgroundLight>
    );
  }
}


const styles = StyleSheet.create({
  infoText: {
    fontFamily: 'American Typewriter',
    fontSize: 14,
    marginBottom: 5,
    color: '#0A0A0A',
  },
  valueText: {
    fontFamily: 'American Typewriter',
    fontSize: 14,
  },
  textRight: {
    color: '#0A0A0A',
    fontFamily: 'American Typewriter',
    fontSize: 12,
    textAlign: 'right',
    fontWeight: 'bold',
  },
});

Campground.propTypes = {
  navigation: object.isRequired,
};
