import React, { useRef } from 'react';

interface Props {
  type: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const TextInput = ({ type, onChange, className }: Props) => (
  <div className={className}>
    <input type={type} onChange={onChange} />
  </div>
);

export default TextInput;
