import React from 'react';

import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const MenuItem = ({ children, className = '' }: Props): React.ReactElement => (
  <div
    className={clsx(
      'rounded-md flex-initial font-semibold bg-yellow-500 hover:bg-yellow-600',
      'p-2 text-center text-white uppercase shadow-sm',
      className
    )}
  >
    {children}
  </div>
);

export default MenuItem;
