import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { string } from 'prop-types';

export default class Header extends React.Component {
  render() {
    return (
      <Text style={styles.header}>
        {this.props.header}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    fontFamily: 'American Typewriter',
    width: '100%',
    color: '#0A0A0A',
    marginBottom: 10,
  },
});

Header.propTypes = {
  header: string,
};

Header.defaultProps = {
  header: '',
};
