import React from 'react';
import { StyleSheet, View } from 'react-native';
import { node, arrayOf, oneOfType } from 'prop-types';

export default class CenterWrapper extends React.Component {
  render() {
    return (
      <View style={styles.overlay}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

CenterWrapper.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
};

CenterWrapper.defaultProps = {
  children: [],
};
