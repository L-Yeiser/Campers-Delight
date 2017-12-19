import React from 'react';
import { StyleSheet, View } from 'react-native';
import { node, arrayOf, oneOfType } from 'prop-types';

export default class InnerWrapper extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});

InnerWrapper.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
};

InnerWrapper.defaultProps = {
  children: [],
};
