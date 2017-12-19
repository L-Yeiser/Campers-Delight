import React from 'react';
import { StyleSheet, View } from 'react-native';
import { node, arrayOf, oneOfType } from 'prop-types';

export default class HorizontalPack extends React.Component {
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
    flexDirection: 'row',
  },
});

HorizontalPack.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
};

HorizontalPack.defaultProps = {
  children: [],
};
