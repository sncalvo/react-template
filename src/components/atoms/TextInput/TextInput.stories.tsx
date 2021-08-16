import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from '../TextInput';

export default {
  title: 'Example/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: 'email',
  placeholder: 'Email',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: 'Password',
};
