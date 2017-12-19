import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { func, string } from 'prop-types';
import InputLabel from '../textComponents/InputLabel';

export default class LabeledTextInput extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <InputLabel label={this.props.label} />
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.props.onChange(this.props.targetState, text)}
          value ={this.props.value} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'American Typewriter',
    fontWeight: 'bold',
    marginBottom: 1,
  },
  textInput: {
    marginBottom: 10,
    padding: 4,
    height: 30,
    borderColor: '#0A0A0A',
    borderWidth: 1,
    borderRadius: 2,
  },
});

LabeledTextInput.propTypes = {
  label: string,
  targetState: string,
  onChange: func,
  value: string,
};

LabeledTextInput.defaultProps = {
  label: '',
  targetState: '',
  value: '',
  onChange: () => {},
};
