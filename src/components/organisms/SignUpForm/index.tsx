import React, { useState } from 'react';

import TextInput from '@components/atoms/TextInput';
import Button from '@components/atoms/Button';

interface UserInfo {
  name: string;
  email: string;
  password: string;
}

const createDefaultUser = () => ({ name: '', email: '', password: '' });

const SignUpForm = (): React.ReactElement => {
  const [user, setUser] = useState<UserInfo>(createDefaultUser());

  return (
    <div className="w-96 bg-yellow-600 flex flex-col justify-center p-5 rounded-md shadow-md">
      <h1 className="mb-3 text-4x1 font-medium text-white text-center">Sign Up</h1>
      <TextInput
        className="mb-3 w-full"
        type="email"
        placeholder="Email"
        onChange={({ target: { value: name } }) => setUser({ ...user, name })}
      />
      <TextInput
        className="mb-3 w-full"
        type="text"
        placeholder="Name"
        onChange={({ target: { value: email } }) => setUser({ ...user, email })}
      />
      <TextInput
        className="mb-3 w-full"
        type="password"
        placeholder="Password"
        onChange={({ target: { value: password } }) =>
          setUser({ ...user, password })
        }
      />

      <Button type="submit">Submit</Button>
    </div>
  );
};

export default SignUpForm;
