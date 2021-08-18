import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfilePic from '../ProfilePic';

export default {
  title: 'Atoms/ProfilePic',
  component: ProfilePic,
} as ComponentMeta<typeof ProfilePic>;

const Template: ComponentStory<typeof ProfilePic> = (args) => (
  <ProfilePic {...args} />
);

export const Pic = Template.bind({});
Pic.args = {
  src: 'https://reqres.in/img/faces/7-image.jpg',
};
