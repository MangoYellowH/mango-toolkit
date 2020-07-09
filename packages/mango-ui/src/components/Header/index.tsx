import React, { ReactNode } from 'react';
import clsx from 'clsx';

export interface HeaderProps {
  children: ReactNode;
  classes: string | string[];
}

const Header: React.FC<HeaderProps> = ({ classes, children }: HeaderProps) => {
  return <header className={clsx('header', classes)}>{children}</header>;
};

export default Header;
