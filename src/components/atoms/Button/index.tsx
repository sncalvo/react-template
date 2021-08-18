import clsx from 'clsx';
import React from 'react';

interface Props {
  children: string;
  shadow?: boolean;
  variant?: 'primary' | 'secondary' | 'warning';
}

const Button = ({
  children,
  shadow,
  className,
  type,
  variant = 'primary',
  onClick,
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>): React.ReactElement => (
  <button
    className={clsx(
      className,
      'focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2',
      'py-2 px-5 text-white font-medium rounded-md',
      {
        'shadow-md': shadow,
        'bg-yellow-500 hover:bg-yellow-700': variant === 'primary',
        'bg-yellow-800 hover:bg-yellow-900': variant === 'secondary',
        'bg-red-500 hover:bg-red-700': variant === 'warning',
      }
    )}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
