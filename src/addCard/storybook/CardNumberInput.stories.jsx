import React from 'react';
import CardNumberInput from '../components/CardNumberInput';

export default {
  title: 'CardNumberInput',
  component: CardNumberInput,
};

const Template = (args) => <CardNumberInput {...args} />;

export const DisplayedCardNumberInput = Template.bind({});

DisplayedCardNumberInput.args = {
  value: '1234',
};

export const HiddenCardNumberInput = Template.bind({});

HiddenCardNumberInput.args = {
  type: 'password',
  value: '1234',
};