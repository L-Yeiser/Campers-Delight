import React from 'react';
import { StyleSheet, View } from 'react-native';
import { node, arrayOf, oneOfType } from 'prop-types';

export default class Inset extends React.Component {
  render() {
    return (
      <View style={styles.inset}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inset: {
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
    padding: 10,
    borderRadius: 2,
  },
});

Inset.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
};

Inset.defaultProps = {
  children: [],
};
