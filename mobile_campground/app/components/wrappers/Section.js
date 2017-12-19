import React from 'react';
import { StyleSheet, View } from 'react-native';
import { node, arrayOf, oneOfType } from 'prop-types';

export default class Section extends React.Component {
  render() {
    return (
      <View style={styles.section}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    padding: 10,
    marginBottom: 10,
    marginTop: 30,
    backgroundColor: '#0C5F9F',
    borderRadius: 2,
  },
});

Section.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
};

Section.defaultProps = {
  children: [],
};
