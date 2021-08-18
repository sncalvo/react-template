import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserItem from '../UserItem';

export default {
  title: 'Molecules/UserItem',
  component: UserItem,
} as ComponentMeta<typeof UserItem>;

const Template: ComponentStory<typeof UserItem> = (args) => <UserItem {...args} />;

export const User = Template.bind({});
User.args = {
  user: {
    id: 1,
    firstName: 'Test name',
    lastName: 'Lastname',
    email: 'some@mail.com',
    job: 'boring job',
    avatar: 'https://reqres.in/img/faces/7-image.jpg',
  },
};
