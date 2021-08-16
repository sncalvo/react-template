import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import MenuItem from '../MenuItem';

export default {
  title: 'Example/MenuItem',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const Item = Template.bind({});
Item.args = {
  children: <h2>Test</h2>,
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  children: <h2>Test</h2>,
  selected: true,
};
