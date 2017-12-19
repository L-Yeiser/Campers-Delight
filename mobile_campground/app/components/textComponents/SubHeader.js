import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { string } from 'prop-types';

export default class subHeader extends React.Component {
  render() {
    return (
      <Text style={styles.subHeader}>
        {this.props.subHeader}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  subHeader: {
    textAlign: 'center',
    color: '#0A0A0A',
    fontSize: 18,
    fontFamily: 'American Typewriter',
  },
});

subHeader.propTypes = {
  subHeader: string,
};

subHeader.defaultProps = {
  subHeader: '',
};
