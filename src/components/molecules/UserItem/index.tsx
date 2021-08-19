import React from 'react';
import clsx from 'clsx';

import User from '@models/User';

import ProfilePic from '@components/atoms/ProfilePic';
import Button from '@components/atoms/Button';

interface Props {
  user: User;
  className: string;
}

const UserItem = ({
  user: { firstName, lastName, email, job, avatar },
  className,
}: Props): React.ReactElement => (
  <div className={clsx('flex flex-row shadow-md rounded-md p-4', className)}>
    <ProfilePic src={avatar} />
    <div className="flex-1 mx-5 justify-items-center items-center">
      <h1 className="text-lg">
        {firstName} {lastName} - {email}
      </h1>
      <h1 className="text-md">{job}</h1>
    </div>
    <div className="items-center">
      <Button variant="warning">Delete</Button>
    </div>
  </div>
);

export default UserItem;
