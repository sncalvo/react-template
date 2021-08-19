import UserItem from '@components/molecules/UserItem';
import User from '@models/User';
import UsersService from '@services/UsersService';
import React, { useEffect, useState } from 'react';

const UsersList = (): React.ReactElement => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    UsersService.getUsers().then((users) => setUsers(users));
  }, []);

  return (
    <div className="p-5">
      {users?.map((user, index) => (
        <UserItem className="my-10" user={user} key={index} />
      ))}
    </div>
  );
};

export default UsersList;
