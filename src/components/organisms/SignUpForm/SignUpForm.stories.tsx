import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SignUpForm from '../SignUpForm';

export default {
  title: 'Example/SignUpForm',
  component: SignUpForm,
} as ComponentMeta<typeof SignUpForm>;

const Template: ComponentStory<typeof SignUpForm> = () => <SignUpForm />;

export const Form = Template.bind({});
Form.args = {};
