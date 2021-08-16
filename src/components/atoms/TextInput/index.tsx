import React from 'react';

import clsx from 'clsx';

interface Props {
  type?: string;
  placeholder?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const TextInput = ({ type = 'text', placeholder, onChange, className }: Props) => (
  <div className={clsx(className)}>
    <input
      className={clsx(
        'rounded-lg py-2 px-4 placeholder-gray-400 bg-white',
        'text-gray-900 appearance-none shadow-md',
        'focus:outline-none focus:ring-2 focus:ring-yellow-500'
      )}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default TextInput;
