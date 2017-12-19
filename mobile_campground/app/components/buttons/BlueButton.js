import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { func, string } from 'prop-types';

export default class DarkButtons extends React.Component {
  render() {
    const { onPress, text } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}
        >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: '#0C5F9F',
    margin: 2,
    borderRadius: 3,
  },
  text: {
    fontFamily: 'American Typewriter',
    fontSize: 16,
    color: '#0A0A0A',
  },
});

DarkButtons.propTypes = {
  text: string,
  onPress: func,
};

DarkButtons.defaultProps = {
  text: '',
  onPRess: () => {},
};
