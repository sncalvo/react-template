import clsx from 'clsx';
import React from 'react';

const ProfilePic = ({
  src,
  className,
}: React.ImgHTMLAttributes<HTMLImageElement>): React.ReactElement => (
  <img className={clsx(className, 'rounded-full')} src={src} />
);

export default ProfilePic;
