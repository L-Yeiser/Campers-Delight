import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { string } from 'prop-types';

export default class InputLabel extends React.Component {
  render() {
    return (
      <Text style={styles.label}>
        {this.props.label}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'American Typewriter',
    fontWeight: 'bold',
    marginBottom: 1,
  },
});

InputLabel.propTypes = {
  label: string,
};

InputLabel.defaultProps = {
  label: '',
};
