import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { Variant } from '../Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: Variant.Primary,
  children: 'Test',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: Variant.Secondary,
  children: 'Test',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: Variant.Warning,
  children: 'Test',
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
  children: 'Test',
};
