import React, { useState } from 'react';

import TextInput from '@components/atoms/TextInput';

interface UserInfo {
  name: string;
  email: string;
  password: string;
}

const createDefaultUser = () => ({ name: '', email: '', password: '' });

const SignUpForm = (): React.ReactElement => {
  const [user, setUser] = useState<UserInfo>(createDefaultUser());

  return (
    <div className="h-48 w-60 bg-yellow-600 flex flex-col justify-center p-5">
      <h1 className="mb-3 text-white text-center">Sign Up</h1>
      <TextInput
        className="mb-3"
        type="text"
        onChange={({ target: { value: name } }) => setUser({ ...user, name })}
      />
      <TextInput
        className="mb-3"
        type="text"
        onChange={({ target: { value: email } }) => setUser({ ...user, email })}
      />
      <TextInput
        className="mb-3"
        type="password"
        onChange={({ target: { value: password } }) =>
          setUser({ ...user, password })
        }
      />
    </div>
  );
};

export default SignUpForm;
