import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Test',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Test',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'Test',
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
  children: 'Test',
};
