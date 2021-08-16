import React from 'react';

import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  selected?: boolean;
  className?: string;
}

const MenuItem = ({
  children,
  selected = false,
  className = '',
}: Props): React.ReactElement => (
  <div
    className={clsx(
      'rounded-md flex-initial font-semibold',
      'p-2 text-center text-white uppercase shadow-sm',
      className,
      selected ? 'bg-yellow-700' : 'bg-yellow-500 hover:bg-yellow-600'
    )}
  >
    {children}
  </div>
);

export default MenuItem;
