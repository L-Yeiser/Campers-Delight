import React from 'react';
import { StyleSheet, View } from 'react-native';
import { node, arrayOf, oneOfType } from 'prop-types';

export default class BackgroundWrapper extends React.Component {
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
    backgroundColor: '#e8e8e8',
  },
});

BackgroundWrapper.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
};

BackgroundWrapper.defaultProps = {
  children: [],
};
