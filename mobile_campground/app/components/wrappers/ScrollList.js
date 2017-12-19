import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { node, arrayOf, oneOfType } from 'prop-types';

export default class ScrollList extends React.Component {
  render() {
    return (
      <ScrollView style={styles.wrapper}>
        {this.props.children}
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    paddingBottom: 40,
    overflow: 'scroll',
  },
});


ScrollList.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
};

ScrollList.defaultProps = {
  children: [],
};
