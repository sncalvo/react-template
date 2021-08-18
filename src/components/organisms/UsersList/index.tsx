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
    <div>
      {users?.map((user) => (
        <UserItem user={user} />
      ))}
    </div>
  );
};

export default UsersList;
