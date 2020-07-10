import React, { ReactNode } from 'react';
import clsx from 'clsx';

export interface HeaderProps {
  children: ReactNode;
  classes?: string | string[];
}

export const Header: React.FC<HeaderProps> = ({
  classes,
  children,
}: HeaderProps) => {
  return (
    <header className={clsx('header', classes)}>
      <div className="header-content">{children}</div>
    </header>
  );
};

export default Header;
