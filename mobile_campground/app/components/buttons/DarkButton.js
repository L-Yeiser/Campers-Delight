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
    alignItems: 'center',
    backgroundColor: '#1B1B1D',
    padding: 20,
  },
  text: {
    color: '#ffffff',
    fontFamily: 'American Typewriter',
    fontSize: 20,
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
