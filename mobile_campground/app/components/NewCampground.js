import React from 'react';
import { object } from 'prop-types';
import CheckBox from 'react-native-checkbox';
import InnerWrapper from './wrappers/InnerWrapper';
import BackgroundLight from './wrappers/BackgroundLight';
import LabeledTextInput from './inputs/LabeledTextInput';
import LabeledTextArea from './inputs/LabeledTextArea';
import HorizontalPack from './wrappers/HorizontalPack';
import DarkButton from './buttons/DarkButton';

const checkBoxLabel = {
  fontFamily: 'American Typewriter',
  fontWeight: 'bold',
  color: '#0A0A0A',
};

export default class NewCampground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      state: '',
      hasBathroom: false,
      hasShower: false,
    };
  }

  updateState(state, value) {
    this.setState({ [state]: value });
  }

  render() {
    const { state } = this;
    const { state: { params: { addCampground } } } = this.props.navigation;
    const updateState = this.updateState.bind(this);
    return (
      <BackgroundLight>
        <InnerWrapper>
          <LabeledTextInput
            label='Name'
            value={state.name}
            targetState='name'
            onChange={updateState}
          />
          <LabeledTextArea
            label='Description'
            value={state.description}
            targetState='description'
            onChange={updateState}
          />
          <HorizontalPack>
            <CheckBox
              labelBefore={true}
              labelStyle={checkBoxLabel}
              label="Has Bathroom"
              checked={state.hasBathroom}
              onChange={checked => updateState('hasBathroom', !checked)}
            />
            <CheckBox
              labelBefore={true}
              labelStyle={checkBoxLabel}
              label="Has Shower"
              checked={state.hasShower}
              onChange={checked => updateState('hasShower', !checked)}
            />
          </HorizontalPack>
        </InnerWrapper>
          <DarkButton
            onPress={() => addCampground(state)}
            text="Add Campground"
          />
      </BackgroundLight>
    );
  }
}


NewCampground.propTypes = {
  navigation: object.isRequired,
};
