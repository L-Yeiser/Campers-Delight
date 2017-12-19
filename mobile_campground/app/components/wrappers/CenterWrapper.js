import React from 'react';
import { StyleSheet, View } from 'react-native';
import { node, arrayOf, oneOfType } from 'prop-types';

export default class CenterWrapper extends React.Component {
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
    flex: 1,
    justifyContent: 'center',
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
