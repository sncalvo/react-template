import clsx from 'clsx';
import React from 'react';

export enum Variant {
  Primary,
  Secondary,
  Warning,
}

interface Props {
  children: string;
  shadow?: boolean;
  variant?: Variant;
}

const Button = ({
  children,
  shadow,
  className,
  type,
  variant = Variant.Primary,
  onClick,
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>): React.ReactElement => (
  <button
    className={clsx(className, 'py-2 px-5 text-white font-medium rounded-md', {
      'shadow-md': shadow,
      'bg-yellow-500 hover:bg-yellow-700': variant === Variant.Primary,
      'bg-yellow-800 hover:bg-yellow-900': variant === Variant.Secondary,
      'bg-red-500 hover:bg-red-700': variant === Variant.Warning,
    })}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
